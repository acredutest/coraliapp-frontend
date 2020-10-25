import React from "react";
import ProtectRoute from "../../hocs/ProtectedRoute";
import InstitutionLayout from "../../layouts/InstitutionLayout/InstitutionLayout";
import styles from "../../styles/Data.module.css";
import analyticStyles from "../../styles/Analytics.module.css";
import { Button } from "@chakra-ui/core";
import Link from "next/link";

function Analytics() {
  const paths = {
    speedometer: "/images/speedometer.svg",
    megaphone: "/images/megaphone.svg",
    linkedin: "/images/linkedin-black.svg",
    share: "/images/share-black.svg",
    increment: "/images/increment.svg",
    decrement: "/images/decrement.svg",
  };

  const title = "Executive Program CEO 2020";
  return (
    <InstitutionLayout>
      <div className={analyticStyles.container}>
        <h1 className={styles.title}>Analítica de {title}</h1>
        <div className={analyticStyles.viewsContainer}>
          <div className={analyticStyles.analyticsContainer}>
            <div className={analyticStyles.descriptionContainer}>
              <div className={analyticStyles.imageContainer}>
                <img src={paths.speedometer} alt="speedometer" />
              </div>
              <h2 className={analyticStyles.analyticName}>
                Número de personas que han visitado la web de los certificados
              </h2>
            </div>
            <div>
              <h3 className={analyticStyles.analyticText}>
                Vistas del certificado
              </h3>
              <p className={analyticStyles.analyticVisitsCount}>630</p>
              <div className={analyticStyles.quantityContainer}>
                <img src={paths.increment} alt="increment" />
                <p className={analyticStyles.percentage}>23.36%</p>
              </div>
            </div>
          </div>
          <div className={analyticStyles.analyticsContainer}>
            <div>
              <div className={analyticStyles.imageContainer}>
                <img src={paths.megaphone} alt="megaphone" />
              </div>
              <h2 className={analyticStyles.analyticName}>
                Personas que visitaron tu web despues de visitar el certificado
              </h2>
            </div>
            <div>
              <h3 className={analyticStyles.analyticText}>
                Vistas del certificado
              </h3>
              <p className={analyticStyles.analyticVisitsCount}>630</p>
              <div className={analyticStyles.quantityContainer}>
                <img src={paths.increment} alt="increment" />
                <p className={analyticStyles.percentage}>23.36%</p>
              </div>
            </div>
          </div>
          <div className={analyticStyles.analyticsContainer}>
            <div>
              <div className={analyticStyles.imageContainer}>
                <img src={paths.share} alt="share" />
              </div>
              <h2 className={analyticStyles.analyticName}>
                Número de veces que el certificado fue compartido en Linkedin
              </h2>
            </div>
            <div>
              <h3 className={analyticStyles.analyticText}>
                Vistas del certificado
              </h3>
              <p className={analyticStyles.analyticVisitsCount}>630</p>
              <div className={analyticStyles.quantityContainer}>
                <img src={paths.increment} alt="increment" />
                <p className={analyticStyles.percentage}>23.36%</p>
              </div>
            </div>
          </div>
          <div className={analyticStyles.analyticsContainer}>
            <div>
              <div className={analyticStyles.imageContainer}>
                <img src={paths.linkedin} alt="linkedin" />
              </div>
              <h2 className={analyticStyles.analyticName}>
                Número de estudiantes que agregaron el certificado en su perfil
              </h2>
            </div>
            <div>
              <h3 className={analyticStyles.analyticText}>
                Vistas del certificado
              </h3>
              <p className={analyticStyles.analyticVisitsCount}>630</p>
              <div className={analyticStyles.quantityContainer}>
                <img src={paths.increment} alt="increment" />
                <p className={analyticStyles.percentage}>23.36%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={analyticStyles.buttonContainer}>
          <Link href="/institution">
            <Button
              bg={"green.200"}
              color={"white"}
              _hover={{
                bg: "green.200",
                color: "white",
                transform: "scale(1.05)",
              }}
              type="submit"
            >
              Cerrar y salir
            </Button>
          </Link>
        </div>
      </div>
    </InstitutionLayout>
  );
}

export default ProtectRoute(Analytics);
