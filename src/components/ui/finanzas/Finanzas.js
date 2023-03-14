import { Card, Divider, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import "./Finanzas.css";
import {
  GiJerrycan,
  GiMoneyStack,
  GiSwipeCard,
  GiTicket,
  GiWheat,
} from "react-icons/gi";
import { useQuery } from "@apollo/client";
import { GET_FINANZAS } from "../../../graphql/query/Finanzas";

const { TabPane } = Tabs;

const Finanzas = () => {
  const url = window.location.search;
  const urlParameter = url.split("=");
  const idCliente = urlParameter[1];

  //PESO
  const [estadoFinanza, setEstadoFinanza] = useState([]);
  const [saldoVencido, setSaldoVencido] = useState();
  const [saldoAVencer, setSaldoAVencer] = useState();
  const [saldoTotal, setSaldoTotal] = useState();
  const [chequeCartera, setChequeCartera] = useState();
  const [pendFacturar, setPendFacturar] = useState();
  const [forward, setForward] = useState();
  const [cerealdisponible, setCerealDisponible] = useState();
  const [creditoTotal, setCreditoTotal] = useState();
  const [acuerdocredito, setAcuerdoCredito] = useState();
  const [creditoDisponible, setCreditoDisponible] = useState();

  //DOLAR
  const [estadoFinanzaUs, setEstadoFinanzaUs] = useState([]);
  const [saldoVencidoUs, setSaldoVencidoUs] = useState();
  const [saldoAVencerUs, setSaldoAVencerUs] = useState();
  const [saldoTotalUs, setSaldoTotalUs] = useState();
  const [chequeCarteraUs, setChequeCarteraUs] = useState();
  const [pendFacturarUs, setPendFacturarUs] = useState();
  const [forwardUs, setForwardUs] = useState();
  const [cerealdisponibleUs, setCerealDisponibleUs] = useState();
  const [creditoTotalUs, setCreditoTotalUs] = useState();
  const [acuerdocreditoUs, setAcuerdoCreditoUs] = useState();
  const [creditoDisponibleUs, setCreditoDisponibleUs] = useState();

  const { data, loading, error } = useQuery(GET_FINANZAS, {
    variables: { idCliente: Number(idCliente) },
  });

  //idCliente=2845 no tiene valores pero funciona
  //idCliente=3663 no tiene valores pero no funciona
  //idCliente=2773 tiene valores y funciona

  useEffect(() => {
    if (data) {
      const { getAgroConsolidadoIframeResolver } = data;
      const finanzas = JSON.parse(getAgroConsolidadoIframeResolver);
      //console.log(finanzas);
      //console.log("agroCli: ",finanzas.agroCli);


      //PESO
      if (finanzas === null) {
        console.log("finanzas pesos no tiene contenido");
        setEstadoFinanza(0);
        setSaldoVencido(0);
        setSaldoAVencer(0);
        setSaldoTotal(0);
        setChequeCartera(0);
        setPendFacturar(0);
        setForward(0);
        setCerealDisponible(0);
        setCreditoTotal(0);
        setAcuerdoCredito(0);
        setCreditoDisponible(0);
      } else {
        
        if (
          finanzas.agroCli &&
          (finanzas.agroCli !== null || finanzas.agroCli !== "")
        ) {
          //console.log("agroCli: ",finanzas.agroCli);
          console.log("finanzas pesos ARG tiene contenido no null");
          setEstadoFinanza(finanzas.agroCli);

          //console.log(finanzas.agroCli.conca_saldovencido);

          //Saldo Vencido
          setSaldoVencido(
            Math.trunc(finanzas.agroCli.conca_saldovencido).toLocaleString(
              "de-DE"
            )
          );
          const SaldoVencido = finanzas.agroCli.conca_saldovencido;

          //Saldo A Vencer
          setSaldoAVencer(
            Math.trunc(finanzas.agroCli.conca_saldoavencer).toLocaleString(
              "de-DE"
            )
          );
          const SaldoAVencer = finanzas.agroCli.conca_saldoavencer;

          //Saldo Total
          const SaldoTotal = SaldoVencido + SaldoAVencer;
          setSaldoTotal(Math.trunc(SaldoTotal).toLocaleString("de-DE"));

          //Ch. en Cartera
          setChequeCartera(
            Math.trunc(finanzas.agroCli.conca_chequescartera).toLocaleString(
              "de-DE"
            )
          );
          const ChequeCartera = finanzas.agroCli.conca_chequescartera;

          //Pend. Facturar
          setPendFacturar(
            Math.trunc(finanzas.agroCli.conca_pendfacturar).toLocaleString(
              "de-DE"
            )
          );
          const PendFacturar = finanzas.agroCli.conca_pendfacturar;

          //Ventas Forward
          setForward(
            Math.trunc(finanzas.agroCli.conca_forward).toLocaleString("de-DE")
          );
          const Forward = finanzas.agroCli.conca_forward;

          //Cereal Disponible
          setCerealDisponible(
            Math.trunc(finanzas.agroCli.conca_cerealdisponible).toLocaleString(
              "de-DE"
            )
          );
          const CerealDisponible = finanzas.agroCli.conca_cerealdisponible;

          //Cheque Garantia
          const ChequeGarantia = finanzas.agroCli.conca_chequesgarantia;

          //Credito Total
          const CreditoTotal =
            SaldoTotal +
            ChequeCartera +
            PendFacturar +
            Forward -
            CerealDisponible +
            ChequeGarantia;
          setCreditoTotal(Math.trunc(CreditoTotal).toLocaleString("de-DE"));

          //Acuerdo Credito
          const AcuerdoC = finanzas.agroCli.conca_acuerdocredito;
          setAcuerdoCredito(Math.trunc(AcuerdoC).toLocaleString("de-DE"));

          //Credito Disponible
          const CreditoDisp = AcuerdoC - CreditoTotal;
          setCreditoDisponible(Math.trunc(CreditoDisp).toLocaleString("de-DE"));
        } else {
          console.log("finanzas pesos ARG no tiene contenido");
          setEstadoFinanza(0);
          setSaldoVencido(0);
          setSaldoAVencer(0);
          setSaldoTotal(0);
          setChequeCartera(0);
          setPendFacturar(0);
          setForward(0);
          setCerealDisponible(0);
          setCreditoTotal(0);
          setAcuerdoCredito(0);
          setCreditoDisponible(0);
        }       
      }

      //Dolar
      if (finanzas === null) {
        console.log("finanzas dolar no tiene contenido");
          setEstadoFinanzaUs(0);
          setSaldoVencidoUs(0);
          setSaldoAVencerUs(0);
          setSaldoTotalUs(0);
          setChequeCarteraUs(0);
          setPendFacturarUs(0);
          setForwardUs(0);
          setCerealDisponibleUs(0);
          setCreditoTotalUs(0);
          setAcuerdoCreditoUs(0);
          setCreditoDisponibleUs(0);
      } else {
        if (
          finanzas.agroCliUS &&
          (finanzas.agroCliUS !== null || finanzas.agroCliUS !== "")
        ) {
          console.log("finanzas dolar tiene contenido no null");
          //console.log("agroCliUS: ", finanzas.agroCliUS);
          setEstadoFinanzaUs(finanzas.agroCliUS);

          //console.log(finanzas.agroCli.conca_saldovencido);

          //Saldo Vencido
          setSaldoVencidoUs(
            Math.trunc(finanzas.agroCliUS.conca_saldovencido).toLocaleString(
              "de-DE"
            )
          );
          const SaldoVencidoUs = finanzas.agroCliUS.conca_saldovencido;

          //Saldo A Vencer
          setSaldoAVencerUs(
            Math.trunc(finanzas.agroCliUS.conca_saldoavencer).toLocaleString(
              "de-DE"
            )
          );
          const SaldoAVencerUs = finanzas.agroCliUS.conca_saldoavencer;

          //Saldo Total
          const SaldoTotalUs = SaldoVencidoUs + SaldoAVencerUs;
          setSaldoTotalUs(Math.trunc(SaldoTotalUs).toLocaleString("de-DE"));

          //Ch. en Cartera
          setChequeCarteraUs(
            Math.trunc(finanzas.agroCliUS.conca_chequescartera).toLocaleString(
              "de-DE"
            )
          );
          const ChequeCarteraUs = finanzas.agroCliUS.conca_chequescartera;

          //Pend. Facturar
          setPendFacturarUs(
            Math.trunc(finanzas.agroCliUS.conca_pendfacturar).toLocaleString(
              "de-DE"
            )
          );
          const PendFacturarUs = finanzas.agroCliUS.conca_pendfacturar;

          //Ventas Forward
          setForwardUs(
            Math.trunc(finanzas.agroCliUS.conca_forward).toLocaleString("de-DE")
          );
          const ForwardUs = finanzas.agroCliUS.conca_forward;

          //Cereal Disponible
          setCerealDisponibleUs(
            Math.trunc(
              finanzas.agroCliUS.conca_cerealdisponible
            ).toLocaleString("de-DE")
          );
          const CerealDisponibleUs = finanzas.agroCliUS.conca_cerealdisponible;

          //Cheque Garantia
          const ChequeGarantiaUs = finanzas.agroCliUS.conca_chequesgarantia;

          //Credito Total
          const CreditoTotalUs =
            SaldoTotalUs +
            ChequeCarteraUs +
            PendFacturarUs +
            ForwardUs -
            CerealDisponibleUs +
            ChequeGarantiaUs;
          setCreditoTotalUs(Math.trunc(CreditoTotalUs).toLocaleString("de-DE"));

          //Acuerdo Credito
          const AcuerdoCUs = finanzas.agroCliUS.conca_acuerdocredito;
          setAcuerdoCreditoUs(Math.trunc(AcuerdoCUs).toLocaleString("de-DE"));

          //Credito Disponible
          const CreditoDispUs = AcuerdoCUs - CreditoTotalUs;
          setCreditoDisponibleUs(
            Math.trunc(CreditoDispUs).toLocaleString("de-DE")
          );
        } else {
          console.log("finanzas dolar no tiene contenido");
          setEstadoFinanzaUs(0);
          setSaldoVencidoUs(0);
          setSaldoAVencerUs(0);
          setSaldoTotalUs(0);
          setChequeCarteraUs(0);
          setPendFacturarUs(0);
          setForwardUs(0);
          setCerealDisponibleUs(0);
          setCreditoTotalUs(0);
          setAcuerdoCreditoUs(0);
          setCreditoDisponibleUs(0);
        }
      }

      // //PESO
      // if (finanzas.agroCli && (finanzas.agroCli !== null || finanzas.agroCli !== "")) {
      //   console.log("finanzas tiene contenido");
      //   setEstadoFinanza(finanzas.agroCli);

      //   //console.log(finanzas.agroCli.conca_saldovencido);

      //   //Saldo Vencido
      //   setSaldoVencido(Math.trunc(finanzas.agroCli.conca_saldovencido).toLocaleString("de-DE"));
      //   const SaldoVencido = finanzas.agroCli.conca_saldovencido;

      //   //Saldo A Vencer
      //   setSaldoAVencer(Math.trunc(finanzas.agroCli.conca_saldoavencer).toLocaleString("de-DE"));
      //   const SaldoAVencer = finanzas.agroCli.conca_saldoavencer;

      //   //Saldo Total
      //   const SaldoTotal = SaldoVencido + SaldoAVencer;
      //   setSaldoTotal(Math.trunc(SaldoTotal).toLocaleString("de-DE"));

      //   //Ch. en Cartera
      //   setChequeCartera(
      //     Math.trunc(finanzas.agroCli.conca_chequescartera).toLocaleString("de-DE"));
      //   const ChequeCartera = finanzas.agroCli.conca_chequescartera;

      //   //Pend. Facturar
      //   setPendFacturar(
      //     Math.trunc(finanzas.agroCli.conca_pendfacturar).toLocaleString("de-DE"));
      //   const PendFacturar = finanzas.agroCli.conca_pendfacturar;

      //   //Ventas Forward
      //   setForward(
      //     Math.trunc(finanzas.agroCli.conca_forward).toLocaleString("de-DE")
      //   );
      //   const Forward = finanzas.agroCli.conca_forward;

      //   //Cereal Disponible
      //   setCerealDisponible(
      //     Math.trunc(finanzas.agroCli.conca_cerealdisponible).toLocaleString("de-DE"));
      //   const CerealDisponible = finanzas.agroCli.conca_cerealdisponible;

      //   //Cheque Garantia
      //   const ChequeGarantia = finanzas.agroCli.conca_chequesgarantia;

      //   //Credito Total
      //   const CreditoTotal = SaldoTotal + ChequeCartera + PendFacturar + Forward - CerealDisponible + ChequeGarantia;
      //   setCreditoTotal(Math.trunc(CreditoTotal).toLocaleString("de-DE"));

      //   //Acuerdo Credito
      //   const AcuerdoC = finanzas.agroCli.conca_acuerdocredito;
      //   setAcuerdoCredito(Math.trunc(AcuerdoC).toLocaleString("de-DE"));

      //   //Credito Disponible
      //   const CreditoDisp = AcuerdoC - CreditoTotal;
      //   setCreditoDisponible(Math.trunc(CreditoDisp).toLocaleString("de-DE"));

      // } else {
      //   console.log("finanzas no tiene contenido");
      //   setEstadoFinanza(0);
      //   setSaldoVencido(0);
      //   setSaldoAVencer(0);
      //   setSaldoTotal(0);
      //   setChequeCartera(0);
      //   setPendFacturar(0);
      //   setForward(0);
      //   setCerealDisponible(0);
      //   setCreditoTotal(0);
      //   setAcuerdoCredito(0);
      //   setCreditoDisponible(0);
      // }

      // //Dolar
      // if (finanzas.agroCliUS && (finanzas.agroCliUS !== null || finanzas.agroCliUS !== "")) {
      //   console.log("finanzas dolar tiene contenido");
      //   console.log("agroCliUS: ", finanzas.agroCliUS);
      //   setEstadoFinanzaUs(finanzas.agroCliUS);

      //   //console.log(finanzas.agroCli.conca_saldovencido);

      //   //Saldo Vencido
      //   setSaldoVencidoUs(Math.trunc(finanzas.agroCliUS.conca_saldovencido).toLocaleString("de-DE"));
      //   const SaldoVencidoUs = finanzas.agroCliUS.conca_saldovencido;

      //   //Saldo A Vencer
      //   setSaldoAVencerUs(Math.trunc(finanzas.agroCliUS.conca_saldoavencer).toLocaleString("de-DE"));
      //   const SaldoAVencerUs = finanzas.agroCliUS.conca_saldoavencer;

      //   //Saldo Total
      //   const SaldoTotalUs = SaldoVencidoUs + SaldoAVencerUs;
      //   setSaldoTotalUs(Math.trunc(SaldoTotalUs).toLocaleString("de-DE"));

      //   //Ch. en Cartera
      //   setChequeCarteraUs(
      //     Math.trunc(finanzas.agroCliUS.conca_chequescartera).toLocaleString("de-DE"));
      //   const ChequeCarteraUs = finanzas.agroCliUS.conca_chequescartera;

      //   //Pend. Facturar
      //   setPendFacturarUs(
      //     Math.trunc(finanzas.agroCliUS.conca_pendfacturar).toLocaleString("de-DE"));
      //   const PendFacturarUs = finanzas.agroCliUS.conca_pendfacturar;

      //   //Ventas Forward
      //   setForwardUs(
      //     Math.trunc(finanzas.agroCliUS.conca_forward).toLocaleString("de-DE")
      //   );
      //   const ForwardUs = finanzas.agroCliUS.conca_forward;

      //   //Cereal Disponible
      //   setCerealDisponibleUs(
      //     Math.trunc(finanzas.agroCliUS.conca_cerealdisponible).toLocaleString("de-DE"));
      //   const CerealDisponibleUs = finanzas.agroCliUS.conca_cerealdisponible;

      //   //Cheque Garantia
      //   const ChequeGarantiaUs = finanzas.agroCliUS.conca_chequesgarantia;

      //   //Credito Total
      //   const CreditoTotalUs = SaldoTotalUs + ChequeCarteraUs + PendFacturarUs + ForwardUs - CerealDisponibleUs + ChequeGarantiaUs;
      //   setCreditoTotalUs(Math.trunc(CreditoTotalUs).toLocaleString("de-DE"));

      //   //Acuerdo Credito
      //   const AcuerdoCUs = finanzas.agroCliUS.conca_acuerdocredito;
      //   setAcuerdoCreditoUs(Math.trunc(AcuerdoCUs).toLocaleString("de-DE"));

      //   //Credito Disponible
      //   const CreditoDispUs = AcuerdoCUs - CreditoTotalUs;
      //   setCreditoDisponibleUs(Math.trunc(CreditoDispUs).toLocaleString("de-DE"));

      // } else {
      //   console.log("finanzas dolar no tiene contenido");
      //   setEstadoFinanzaUs(0);
      //   setSaldoVencidoUs(0);
      //   setSaldoAVencerUs(0);
      //   setSaldoTotalUs(0);
      //   setChequeCarteraUs(0);
      //   setPendFacturarUs(0);
      //   setForwardUs(0);
      //   setCerealDisponibleUs(0);
      //   setCreditoTotalUs(0);
      //   setAcuerdoCreditoUs(0);
      //   setCreditoDisponibleUs(0);
      // }
    }
  }, [data]);

  return (
    <>
      <div className="div_wrapper">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Peso" key="1">
            {/* SALDOS */}
            <div className="div_content">
              <div className="div_cards">
                <div className="card">
                  <div className="card_interna">
                    <GiMoneyStack className="img" color="00b33c" />
                    <div className="card1">
                      <span>$ {saldoVencido}</span>
                      <h4>SALDO VENCIDO</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>$ {saldoAVencer} </span>
                  <h4>SALDO A VENCER</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>${saldoTotal}</span>
                  <h4>SALDO TOTAL</h4>
                </div>
              </div>
            </div>

            {/* OTRA INFORMACIÓN */}
            <div className="div_content">
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna" style={{ marginLeft: "22%" }}>
                    <div className="img">
                      <GiTicket color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>${chequeCartera}</span>
                      <h4>CH. EN CARTERA</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna" style={{ marginLeft: "22%" }}>
                    <div className="img">
                      <GiJerrycan color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>${pendFacturar}</span>
                      <h4>PEND. FACTURAR</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna" style={{ marginLeft: "22%" }}>
                    <div className="img">
                      <GiWheat color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>${forward}</span>
                      <h4>VENTAS FORWARD</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card ultima_card">
                  <div className="centrar">
                    <span>${cerealdisponible}</span>
                    <h4>CEREAL DISPONIBLE</h4>
                  </div>
                </Card>
              </div>
            </div>

            {/* RESUMEN*/}
            <div className="div_content">
              <div className="div_cards">
                <div className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiSwipeCard color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>${creditoTotal}</span>
                      <h4>CRÉDITO TOTAL</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>${acuerdocredito}</span>
                  <h4>ACUERDO DE CRÉDITO</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>${creditoDisponible}</span>
                  <h4>CRÉDITO DISPONIBLE</h4>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Dolar" key="2">
            {/* SALDOS */}
            <div className="div_content">
              <div className="div_cards">
                <div className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiMoneyStack color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>U$S {saldoVencidoUs}</span>
                      <h4>SALDO VENCIDO</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>U$S {saldoAVencerUs}</span>
                  <h4>SALDO A VENCER</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>U$S {saldoTotalUs}</span>
                  <h4>SALDO TOTAL</h4>
                </div>
              </div>
            </div>

            {/* OTRA INFORMACIÓN */}
            <div className="div_content">
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna" style={{ marginLeft: "22%" }}>
                    <div className="img">
                      <GiTicket color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>U$S {chequeCarteraUs}</span>
                      <h4>CH. EN CARTERA</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna" style={{ marginLeft: "22%" }}>
                    <div className="img">
                      <GiJerrycan color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>U$S {pendFacturarUs}</span>
                      <h4>PEND. FACTURAR</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna" style={{ marginLeft: "22%" }}>
                    <div className="img">
                      <GiWheat color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>U$S {forwardUs}</span>
                      <h4>VENTAS FORWARD</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card ultima_card">
                  <div className="centrar card_total">
                    <span>U$S {cerealdisponibleUs}</span>
                    <h4>CEREAL DISPONIBLE</h4>
                  </div>
                </Card>
              </div>
            </div>

            {/* RESUMEN*/}
            <div className="div_content">
              <div className="div_cards">
                <div className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiSwipeCard color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>U$S {creditoTotalUs}</span>
                      <h4>CRÉDITO TOTAL</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>U$S {acuerdocreditoUs}</span>
                  <h4>ACUERDO DE CRÉDITO</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>U$S {creditoDisponibleUs}</span>
                  <h4>CRÉDITO DISPONIBLE</h4>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Finanzas;
