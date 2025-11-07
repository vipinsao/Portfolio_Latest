"use client";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(null);
  const [data, setData] = useState(null);

  const openModal = useCallback((newView, payload) => {
    setView(newView);
    setData(payload);
    setIsOpen(true);
    document.documentElement.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.documentElement.style.overflow = "";
    setTimeout(() => {
      setView(null);
      setData(null);
    }, 200);
  }, []);

  const value = useMemo(
    () => ({ isOpen, view, data, openModal, closeModal }),
    [isOpen, view, data, openModal, closeModal]
  );

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && isOpen) closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
