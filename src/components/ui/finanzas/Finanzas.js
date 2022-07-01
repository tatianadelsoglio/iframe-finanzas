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

const onChange = (key) => {
  console.log(key);
};



const Finanzas = () => {
  const url = window.location.search;
  const urlParameter = url.split("=");
  const idCliente = urlParameter[1];

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

  const { data, loading, error } = useQuery(GET_FINANZAS, {
    variables: { idCliente: Number(idCliente) },
  });



  useEffect(() => {

    if (data){

      const {getAgroConsolidadoIframeResolver} = data;
      const finanzas = JSON.parse(getAgroConsolidadoIframeResolver);


      console.log(finanzas);

      setEstadoFinanza(finanzas.agroCli[0]);

      console.log(finanzas.agroCli[0]);

      //Saldo Vencido
      setSaldoVencido(Math.trunc(finanzas.agroCli[0].conca_saldovencido).toLocaleString('de-DE'));
      const SaldoVencido = finanzas.agroCli[0].conca_saldovencido;

      //Saldo A Vencer
      setSaldoAVencer(Math.trunc(finanzas.agroCli[0].conca_saldoavencer).toLocaleString('de-DE'));
      const SaldoAVencer = finanzas.agroCli[0].conca_saldoavencer;
      
      //Saldo Total
      const SaldoTotal = SaldoVencido + SaldoAVencer;
      setSaldoTotal(Math.trunc(SaldoTotal).toLocaleString('de-DE'));      

      //Ch. en Cartera
      setChequeCartera(Math.trunc(finanzas.agroCli[0].conca_chequescartera).toLocaleString('de-DE'));
      const ChequeCartera = finanzas.agroCli[0].conca_chequescartera;

      //Pend. Facturar
      setPendFacturar(Math.trunc(finanzas.agroCli[0].conca_pendfacturar).toLocaleString('de-DE'));
      const PendFacturar = finanzas.agroCli[0].conca_pendfacturar;

      //Ventas Forward
      setForward(Math.trunc(finanzas.agroCli[0].conca_forward).toLocaleString('de-DE'));
      const Forward = finanzas.agroCli[0].conca_forward;

      //Cereal Disponible
      setCerealDisponible(Math.trunc(finanzas.agroCli[0].conca_cerealdisponible).toLocaleString('de-DE'));
      const CerealDisponible = finanzas.agroCli[0].conca_cerealdisponible;

      //Cheque Garantia
      const ChequeGarantia = finanzas.agroCli[0].conca_chequesgarantia;

      //Credito Total
      const CreditoTotal = SaldoTotal + ChequeCartera + PendFacturar + Forward - CerealDisponible + ChequeGarantia;
      setCreditoTotal(Math.trunc(CreditoTotal).toLocaleString('de-DE'));


      

      //Acuerdo Credito
      const AcuerdoC = finanzas.agroCli[0].conca_acuerdocredito;      
      setAcuerdoCredito(Math.trunc(AcuerdoC).toLocaleString('de-DE'));

      //Credito Disponible
      const CreditoDisp = AcuerdoC - CreditoTotal;
      setCreditoDisponible(Math.trunc(CreditoDisp).toLocaleString('de-DE'));
    }

    
  }, [data])
  
  return (
    <>
      <div className="div_wrapper">
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Peso" key="1">
            {/* SALDOS */}
            <div className="div_content">
              <div className="div_cards">
                <div className="card">
                  <div className="card_interna">
                    <GiMoneyStack className="img" color="00b33c" />
                    <div className="card1">
                      <span>$ {saldoVencido ? saldoVencido : 0}</span>
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
                  <span>$ {saldoAVencer ? saldoAVencer : 0} </span>
                  <h4>SALDO A VENCER</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>${saldoTotal ? saldoTotal : 0}</span>
                  <h4>SALDO TOTAL</h4>
                </div>
              </div>
            </div>

            {/* OTRA INFORMACIÓN */}
            <div className="div_content">
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiTicket color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>${chequeCartera ? chequeCartera : 0}</span>
                      <h4>CH. EN CARTERA</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiJerrycan color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>${pendFacturar ? pendFacturar : 0}</span>
                      <h4>PEND. FACTURAR</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiWheat color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>${forward ? forward : 0}</span>
                      <h4>VENTAS FORWARD</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card ultima_card">
                  <div className="centrar">
                    <span>${cerealdisponible ? cerealdisponible : 0}</span>
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
                      <span>${creditoTotal ? creditoTotal : 0}</span>
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
                  <span>${acuerdocredito ? acuerdocredito : 0}</span>
                  <h4>ACUERDO DE CRÉDITO</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>${creditoDisponible ? creditoDisponible : 0}</span>
                  <h4>CRÉDITO DISPONIBLE</h4>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Dolar" disabled key="2">
            {/* SALDOS */}
            <div className="div_content">
              <div className="div_cards">
                <div className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiMoneyStack color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>$0</span>
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
                  <span>$0</span>
                  <h4>SALDO A VENCER</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>$0</span>
                  <h4>SALDO TOTAL</h4>
                </div>
              </div>
            </div>

            {/* OTRA INFORMACIÓN */}
            <div className="div_content">
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiTicket color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>$0</span>
                      <h4>CH. EN CARTERA</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiJerrycan color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>$0</span>
                      <h4>PEND. FACTURAR</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card">
                  <div className="card_interna">
                    <div className="img">
                      <GiWheat color="00b33c" />
                    </div>

                    <div className="card1">
                      <span>$0</span>
                      <h4>VENTAS FORWARD</h4>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="div_cards">
                <Card className="card ultima_card">
                  <div className="centrar card_total">
                    <span>$0</span>
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
                      <span>$0</span>
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
                  <span>$0</span>
                  <h4>ACUERDO DE CRÉDITO</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar">
                  <span>$0</span>
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
