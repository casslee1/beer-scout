const apiUrl =
  import.meta.env.MODE === "production"
    ? "https://beer-scout-backend-production.up.railway.app" // Production backend URL
    : "http://localhost:8787"; // Development backend URL

export async function addBarPrice(barData) {
  try {
    const response = await fetch(`${apiUrl}/barPrices/addBarPrice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(barData), // Send the form data as JSON
    });

    if (!response.ok) {
      const message = await response.json();
      console.error("Error response from server:", message);
      throw new Error(message.message);
    }

    const data = await response.json();
    console.log("Bar price added successfully:", data);
    return data;
  } catch (error) {
    console.error("Error adding bar price:", error);
    throw error;
  }
}

// Function to get bar prices by location
export async function getBarPricesByLocation(location) {
  try {
    const requestUrl = `${apiUrl}/barPrices/getBarPrices/${location}`;
    console.log("Request URL:", requestUrl); // log url (for debugging)

    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const message = await response.json();
      console.error("Error response from server:", message);
      throw new Error(message.message);
    }

    const data = await response.json();
    console.log("Bar prices fetched successfully:", data);
    return data.barPrices;
  } catch (error) {
    console.error("Error fetching bar prices:", error);
    throw error;
  }
}

// Function to log in
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const message = await response.json();
      console.error("Error response from server:", message);
      throw new Error(message.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

// Function to log out
export async function logoutUser() {
  try {
    const response = await fetch(`${apiUrl}/users/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      const message = await response.json();
      console.error("API: logoutUser error", message);
      throw new Error(message.message);
    }

    return response.json();
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
}

// Function to authenticate based on the session ID cookie
export async function authUser() {
  try {
    const response = await fetch(`${apiUrl}/users/profile`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      const message = await response.json();
      console.error("API: authUser error", message);
      throw new Error(message.message);
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error("Error authenticating user:", error);
    return null; // Return null if authentication fails
  }
}
