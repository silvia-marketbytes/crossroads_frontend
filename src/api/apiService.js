import apiClient from "./apiClient";

const apiService = {
    getHomeBanner: () => {
      return apiClient.get('/home/home-banner/');
    },
   
  };
  
  export default apiService;