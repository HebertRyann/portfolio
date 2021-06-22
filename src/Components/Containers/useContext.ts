import { useCallback, useContext, useEffect } from "react";
import ContainerContext from "./ContainerContext";

export function useContainer(containerName: string) {
  const { 
    registerContainer,
    getContainerByName, 
    unregisterContainer,
  } = useContext(ContainerContext);

  useEffect(() => {
    return unregisterContainer(containerName);
  }, [containerName, unregisterContainer]);

  const getContainer = useCallback(() => {
    getContainerByName(containerName);
  }, [containerName, getContainerByName]);

  return { registerContainer, getContainer };
}