// base url
const url = process.env.NEXT_PUBLIC_BASE_API_URL;

// fetch all categories
const getAllCategories = async () => {
  const res = await fetch(`${url}/categories`, {
    next: { tags: ["categories"] },
  });
  const data = await res.json();
  return data;
};

// add new category
const addCategory = async (data = {}) => {
  const res = await fetch(`${url}/categories/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

// fetch all animals
const getAllAnimals = async (query = "") => {
  const res = await fetch(`${url}/animals?category=${query}`, {
    next: { tags: ["animals"] },
  });
  const data = await res.json();
  return data;
};

// add new animal
const addAnimal = async (data = {}) => {
  const res = await fetch(`${url}/animals/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

// upload image to imgbb
const uploadImage = async (formData) => {
  const res = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_VITE_IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  return data;
};

export { getAllCategories, addCategory, getAllAnimals, addAnimal, uploadImage };
