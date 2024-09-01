import { OrderInput } from "@/shared/static/types";

class API {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  signInRequest = (input: { username: string; password: string }) =>
    fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
  // getProducts = (category: CategoryName) => {
  //   return fetch(`${this.baseUrl}/products/category/${category}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return data;
  //     });
  // };
  // getProductById = (id: number) => {
  //   return fetch(`${this.baseUrl}/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return data;
  //     });
  // };

  // createProduct = (input: Product, token: string) => {
  //   return fetch(`${this.baseUrl}/products`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(input),
  //   });
  // };
  // updateProduct = (input: Product, token: string) => {
  //   return fetch(`${this.baseUrl}/products/${input.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(input),
  //   });
  // };
  // deleteProduct = (id: number, token: string) => {
  //   return fetch(`${this.baseUrl}/products/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // };
  getOrders = (token: string) => {
    return fetch(`${this.baseUrl}/orders`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
  createOrder = (input: OrderInput) =>
    fetch(`${this.baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
    // uploadImage = (input: File) => {
    //   const formData = new FormData();
    //   formData.append('file', input); // 'file' — имя поля, ожидаемое сервером
    
    //   return fetch(`${this.baseUrl}/upload`, {
    //     method: "POST",
    //     // Не устанавливайте заголовок 'Content-Type' вручную
    //     body: formData,
    //   })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error(`Ошибка HTTP: ${res.status}`);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     return data;
    //   })
    //   .catch((error) => {
    //     console.error('Ошибка при загрузке изображения:', error);
    //     throw error;
    //   });
    // }
    
}


export const api = new API('http://localhost:4000')