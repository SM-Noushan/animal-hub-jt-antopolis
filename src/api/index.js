// base url
const url = process.env.NEXT_PUBLIC_Base_API_URL;

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

export { getAllCategories, addCategory };
