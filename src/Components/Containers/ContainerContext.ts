import React, { createContext, ReactNode, useContext } from "react";

export interface ContainerProps {
  containerName: string
  overlayNode: ReactNode;
  containerSection: React.RefObject<HTMLElement>;
}

interface ContainerContextProps {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredContainers: ContainerProps[];
  registerContainer(container: ContainerProps): void;
  getContainerByName(containerName: string): ContainerProps | null;
  unregisterContainer(containerName: string): void;
}

export default  React.createContext<ContainerContextProps>({} as ContainerContextProps);