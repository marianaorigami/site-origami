import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faIndustry, faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div style={styles.container}>
      {/* Seção Superior: Financiamento */}
      <div style={styles.financingHeader}>
        <div style={styles.lineWrapper}>
          <FontAwesomeIcon icon={faCoins} style={styles.iconLarge} />
          <div style={styles.horizontalLine}></div>
        </div>
        
        <div style={styles.titleContainer}>
          <span style={styles.mainTitle}>FINANCIAMENTO DA INOVAÇÃO</span>
          <div style={styles.iconGroup}>
            <FontAwesomeIcon icon={faIndustry} style={styles.iconMedium} />
            <FontAwesomeIcon icon={faGlobe} style={styles.iconMedium} />
            <FontAwesomeIcon icon={faUsers} style={styles.iconMedium} />
          </div>
        </div>

        <div style={styles.lineWrapper}>
          <div style={styles.horizontalLine}></div>
          <FontAwesomeIcon icon={faCoins} style={styles.iconLarge} />
        </div>
      </div>

      {/* Seção Principal com linhas laterais */}
      <div style={styles.mainContent}>
        <div style={styles.verticalLine}></div>
        
        <div style={styles.productsSection}>
          <h2 style={styles.sectionTitle}>PRODUTOS & CONSULTORIA</h2>
          <div style={styles.wordCloud}>
            <span style={styles.boldWord}>P&D</span>
            <span style={styles.lightWord}>DESENVOLVIMENTO ÁGIL</span>
            <span style={styles.boldWord}>ESTRATÉGIA DE PRODUTO</span>
            <span style={styles.lightWord}>ROADMAP E PRIORIDADES</span>
            <span style={styles.boldWord}>GTM</span>
            <span style={styles.boldWord}>DELIVERY</span>
            <span style={styles.boldWord}>VALIDAÇÃO COM USUÁRIO</span>
            <span style={styles.boldWord}>MANUTENÇÃO E EVOLUÇÃO CONTÍNUA</span>
            <span style={styles.boldWord}>DESENHO ORGANIZACIONAL</span>
            <span style={styles.lightWord}>GESTÃO DE PRODUTOS</span>
            <span style={styles.lightWord}>DIAGNÓSTICO DE DESAFIOS</span>
            <span style={styles.boldWord}>DEV SEC OPS</span>
            <span style={styles.boldWord}>CAPACITAÇÃO DE TIMES</span>
            <span style={styles.lightWord}>INOVAÇÃO ABERTA</span>
            <span style={styles.boldWord}>ACOMPANHAMENTO DE KPIS</span>
            <span style={styles.lightWord}>COMPUTAÇÃO EM NUVEM</span>
          </div>
        </div>
        
        <div style={styles.verticalLine}></div>
      </div>
    </div>
  );
};

// --- ESTILOS ---

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
    textAlign: "center",
    padding: "40px 20px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0px",
  },
  financingHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1100px',
  },
  lineWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  horizontalLine: {
    height: '4px',
    backgroundColor: '#4A4A4A',
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 20px',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#4A4A4A',
    letterSpacing: '1px',
    whiteSpace: 'nowrap',
    marginBottom: '10px',
  },
  iconGroup: {
    display: 'flex',
    gap: '20px',
    color: '#4A4A4A',
  },
  iconLarge: {
    fontSize: '3rem',
    color: '#4A4A4A',
    margin: '0 20px',
  },
  iconMedium: {
    fontSize: '2.5rem',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1100px',
    paddingTop: '20px',
  },
  verticalLine: {
    width: '4px',
    backgroundColor: '#4A4A4A',
  },
  productsSection: {
    padding: '0 40px',
    flex: 1,
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: '30px',
  },
  wordCloud: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px 25px',
    lineHeight: '1.5',
  },
  boldWord: {
    fontWeight: 'bold',
    color: '#4A4A4A',
    fontSize: '1.1rem',
  },
  lightWord: {
    fontWeight: 400,
    color: '#6E996C',
    fontSize: '1rem',
  },
};

export default Services;