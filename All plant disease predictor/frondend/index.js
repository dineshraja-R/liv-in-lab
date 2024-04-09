async function tomato() {
  const formData = new FormData();
  const fileInput = document.getElementById("tomatoInput");
  const file = fileInput.files[0];
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:1000/predict/tomato", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to predict tomato disease");
    }

    const result = await response.json();
    document.getElementById(
      "tomatoResult"
    ).textContent = `Predicted Tomato Disease: ${result.class}`;
    console.log(result.class);
  } catch (error) {
    console.error("Error predicting tomato disease:", error);
  }
}

async function potato() {
  const formData = new FormData();
  const fileInput = document.getElementById("potatoInput");
  const file = fileInput.files[0];
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:1000/predict/potato", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to predict potato disease");
    }

    const result = await response.json();
    document.getElementById(
      "potatoResult"
    ).textContent = `Predicted Potato Disease: ${result.class}`;
    console.log(result.class);
  } catch (error) {
    console.error("Error predicting potato disease:", error);
  }
}
async function banana() {
  const formData = new FormData();
  const fileInput = document.getElementById("bananaInput");
  const file = fileInput.files[0];
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:1000/predict/banana", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to predict potato disease");
    }

    const result = await response.json();
    document.getElementById(
      "bananaResult"
    ).textContent = `Predicted banana Disease: ${result.class}`;
    console.log(result.class);
  } catch (error) {
    console.error("Error predicting potato disease:", error);
  }
}
async function corn() {
  const formData = new FormData();
  const fileInput = document.getElementById("cornInput");
  const file = fileInput.files[0];
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:1000/predict/corn", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to predict potato disease");
    }

    const result = await response.json();
    document.getElementById(
      "cornResult"
    ).textContent = `Predicted corn Disease: ${result.class}`;
    console.log(result.class);
  } catch (error) {
    console.error("Error predicting potato disease:", error);
  }
}
