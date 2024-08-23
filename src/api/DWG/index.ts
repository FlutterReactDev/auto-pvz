import { client } from "@/services/client";
import { baseApi } from "../Base";
import {
    DwgResponse,
    SvgParams,
    UploadDwgRequest,
    UploadDwgResponse,
} from "./types";
import axios, { AxiosError, isAxiosError } from "axios";

const DWGApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getDwg: build.query<DwgResponse, number>({
                query: (dwgId) => ({
                    url: `get-dwg/${dwgId}`,
                }),
            }),

            getLayers: build.query<void, number>({
                query: (dwgId) => ({
                    url: `/get-layers/${dwgId}`,
                }),
            }),

            getSvg: build.query<string, SvgParams>({
                query: ({ dwg_id, layer_id, grid_x, grid_y, zoom }) => {
                    return {
                        url: `/get-svg/${dwg_id}/${layer_id}`,
                        params: {
                            grid_x,
                            grid_y,
                            zoom,
                        },
                        responseHandler: (response) => response.text(),
                    };
                },
            }),

            uploadDwg: build.mutation<UploadDwgResponse, UploadDwgRequest>({
                // query: ({ file }) => {
                //     const formData = new FormData();
                //     formData.append("file", file);

                //     return {
                //         url: `/upload-dwg`,
                //         method: "POST",
                //         headers: {
                //             "Content-Type": "multipart/form-data",
                //         },
                //         body: formData,
                //         formData: true,
                //     };
                // },

                queryFn: async ({ file }) => {
                    const formData = new FormData();
                    formData.append("file", file);
                    try {
                        const response = await client.post<UploadDwgResponse>(
                            "/upload-dwg",
                            formData,
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data;",
                                },
                            }
                        );
                        return {
                            data: response.data,
                        };
                    } catch (error) {
                        const axiosError = error as AxiosError;
                        return {
                            error: {
                                status: axiosError.code,
                                error: axiosError.message,
                                data: axiosError.response?.data,
                            },
                        };
                    }
                },
            }),
        };
    },
});

export const {
    useGetDwgQuery,
    useGetLayersQuery,
    useGetSvgQuery,
    useUploadDwgMutation,
} = DWGApi;
