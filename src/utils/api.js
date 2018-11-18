import instance from './axios'
export const getLogoHot = (params={}) => {
    return instance.get("/lottery/api/v1/getLogoHot", { params: params });
 };
 
 // post
 export const getActivity = (params={}) => {
    return instance.post("/lottery/api/v1/getActivityById", params);
 }

 export const getCompany = (p) =>{
     return instance.post("http://xp.weilian.cn:8199/NVRCT/sevenStarController/getAllCompany",p)
 }