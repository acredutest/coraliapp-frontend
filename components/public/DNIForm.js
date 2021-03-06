import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { Spinner } from "@chakra-ui/core";
import styles from "./../../styles/Certificates.module.scss";

import { getCredentials } from "./../../redux/slices/credentialsSlice";
import { useRouter } from "next/router";
import { getFetch } from "../../client/client";

const buttonMessages = {
  onSearch: {
    message: "Buscar Certificados",
    color: "#9166EB",
  },
  save: {
    message: "Guardar",
    color: "#7498FF",
  },
  edit: {
    message: "Editar",
    color: "#69707F",
  },
};

export default function DNIForm({ state = null, setState, dispatch, dni }) {
  const [isLoading, setIsLoading] = useState(false);
  const [fieldDNI, setFieldDNI] = useState(null);
  const [DNI, setDNI] = useState(null);
  const [edit, setEdit] = useState(!!DNI);
  const [currentState, setCurrentState] = useState(null);

  const router = useRouter();

  const handleSubmit = (event) => {
    const DNIValue = event.target.DNI.value.toString();
    event.preventDefault();
    if (!DNIValue.match(/^(\d{8})$/)) return alert("Should have 8 digits");
    setDNI(DNIValue);
    setIsLoading(true);
    setTimeout(async () => {
      setIsLoading(false);
      const res = await getFetch(`/users/${DNI}/credentials`);
      if (res.data.errors) {
        setState("notFound");
      } else if (res.data.user) {
        router.push("/user");
      }
      setEdit(true);
    }, 1000);
  };

  const openEdit = (event) => {
    event.preventDefault();
    setEdit(false);
  };
  useEffect(() => {
    if (state !== "onSearch") {
      !DNI ? setCurrentState("save") : setCurrentState("edit");
    } else {
      setCurrentState(state);
    }
  }, []);

  return (
    <>
      <section className={(styles.section, styles.searchSection)}>
        <h2>Documento de Identidad</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            name="DNI"
            placeholder="81675828"
            value={DNI}
            onChange={(e) => {
              setDNI(e.target.value);
            }}
            disabled={edit && "true"}
          />
          {state === "onSearch" && (
            <button
              type="submit"
              style={{ background: buttonMessages[state].color }}
            >
              {buttonMessages[state].message}
            </button>
          )}
          {state !== "onSearch" && !edit && (
            <button
              type="submit"
              style={{ background: buttonMessages.save.color }}
            >
              {buttonMessages.save.message}
            </button>
          )}
          {state !== "onSearch" && edit && (
            <button
              onClick={(event) => openEdit(event)}
              style={{ background: buttonMessages.edit.color }}
            >
              {buttonMessages.edit.message}
            </button>
          )}
        </form>
      </section>
      {isLoading && (
        <div className={styles.loader}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="rgba(165, 163, 163,0.5)"
            color="#9166EB"
            size="lg"
          />
        </div>
      )}
    </>
  );
}
