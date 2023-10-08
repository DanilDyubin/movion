import {useState, useCallback} from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json', "X-API-KEY": '8651d781-07bb-427d-ba6e-1bb41f5c8691'}) => {
        setLoading(true);

        try {  // т/к этот метод только отправляет запрос на сервер и не обрабатывает его (с помощью .then), то нам нужна конструкция try чтобы обработать ошибку
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) { // true, если статус ответа в диапазоне 200-299.
                throw new Error(`Could not fetch ${url}, status: ${response.status}`); // выкидываем (throw) объект ошибки
            }

            const data = await response.json();
            
            setLoading(false);
            return data;

        } catch(err) {  // (e) - переменная, которая автоматически придет из браузера в этот аргумент (это не объект события)))
            setLoading(false);
            setError(err.message); // e.message - сообщение об ошибки
            throw err;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []); // ф-я которая очищает ошибку, потому что когда мы ловим ошибку на персонаже в randomcharacter, то мы не сможем переключиться на другого персонажа не убрав ошибку
    
    return {loading, request, error, clearError};
};

export default useHttp;

// const useHttp = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
  
//     const sendHttpRequest = useCallback(async (requestOptions, manageData) => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(requestOptions.endpoint, {
//           method: requestOptions.method ? requestOptions.method : "GET",
//           headers: requestOptions.headers ? requestOptions.headers : {},
//           body: requestOptions.body ? JSON.stringify(requestOptions.body) : null,
//         });
  
//         if (!response.ok) {
//           throw new Error("Ошибка запроса.");
//         }
  
//         const data = await response.json();
//         manageData(data);
//       } catch (err) {
//         setError(err.message || "Что-то пошло не так...");
//       }
//       setIsLoading(false);
//     }, []);
  
//     return {
//       isLoading,
//       error,
//       sendHttpRequest,
//     };
//   };
  
//   export default useHttp;