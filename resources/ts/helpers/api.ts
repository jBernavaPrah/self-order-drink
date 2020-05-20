import {client} from '../services/axios'
import Order from "../types/Order";
import CreateOrder from "../types/CreateOrder";
import {AxiosResponse} from "axios";
import ApiResponse from "../types/ApiResponse";
import UpdateOrder from "../types/UpdateOrder";
import SearchCocktail from "../types/SearchCocktail";
import Cocktail from "../types/Cocktail";
import OrderResourceApi from "../types/OrderResourceApi";

export const createOrder = async (createOrder: CreateOrder): Promise<AxiosResponse<ApiResponse<OrderResourceApi>>> => {
    return client.post<ApiResponse<OrderResourceApi>>('/orders', createOrder);
};

export const getOrder = async (id: number): Promise<AxiosResponse<ApiResponse<OrderResourceApi>>> => {
    return client.get<ApiResponse<OrderResourceApi>>(`/orders/${id}`)
};

export const updateOrder = async (id: number, updateOrder: UpdateOrder): Promise<AxiosResponse<ApiResponse<Order>>> => {
    return client.put<ApiResponse<Order>>(`/orders/${id}`, updateOrder)
};

export const deleteOrder = async (id: number): Promise<AxiosResponse<ApiResponse<null>>> => {
    return client.delete<ApiResponse<null>>(`/orders/${id}`)
};

export const searchCocktail = async (searchCocktail: SearchCocktail): Promise<AxiosResponse<ApiResponse<Cocktail[]>>> => {
    return client.get<ApiResponse<Cocktail[]>>('/cocktails', {params: searchCocktail})
};

