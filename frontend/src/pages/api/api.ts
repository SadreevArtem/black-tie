import { Master } from "@/components/MastersBlock/MastersBlock";
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
  getMasters = () => {
    return fetch(`${this.baseUrl}/masters`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
  getMastersAll = (token:string) => {
    return fetch(`${this.baseUrl}/masters/all`, {
      method: "GET",
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
  getMastersById = (id: number) => {
    return fetch(`${this.baseUrl}/masters/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };
  getMastersByIdAdmin = (id: number, token:string) => {
    return fetch(`${this.baseUrl}/masters/all/${id}`, {
      method: "GET",
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

  createMaster = (input: Master, token: string) => {
    return fetch(`${this.baseUrl}/masters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(input),
    });
  };
  updateMaster = (input: Master, token: string) => {
    return fetch(`${this.baseUrl}/masters/${input.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(input),
    });
  };
  deleteMaster = (id: number, token: string) => {
    return fetch(`${this.baseUrl}/masters/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
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