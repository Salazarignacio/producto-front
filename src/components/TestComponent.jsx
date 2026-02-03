import { test } from "../api/ProductoService.js";
import { useEffect } from "react";

export default function TesteComponent({}) {
  useEffect(() => {
    const probarEndpoint = async () => {
      try {
        const data = await test();
        const text = await data.text()
        console.log("Respuesta test:", text);
      } catch (error) {
        console.error(error);
      }
    };

    probarEndpoint();
  }, []);
  return (<>Test Component</>)
}
