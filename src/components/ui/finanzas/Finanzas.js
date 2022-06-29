import { Card, Divider, Tabs } from "antd";
import React from "react";
import "./Finanzas.css";
import {
  GiJerrycan,
  GiMoneyStack,
  GiSwipeCard,
  GiTicket,
  GiWheat,
} from "react-icons/gi";
import { GET_FINANZAS } from "../../../graphql/query/Finanzas";




const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const Finanzas = () => {

  const { data, loading, error } = useQuery(GET_FINANZAS, {
    variables: { idCliente: Number(idCliente) },
  });

  useEffect(() => {
    const finanzas = JSON.parse(data.getAgroConsolidadoIframeResolver);

    

  }, [data])
  


  return (
    <>
      <div className="div_wrapper">
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Peso" key="1">
            {/* SALDOS */}
            <div className="div_content">
              <div className="div_cards">
                <div className="card card_vencido">
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
                <div className="centrar card_aVencer">
                  <span>$0</span>
                  <h4>SALDO A VENCER</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar card_total">
                  <span>$0</span>
                  <h4>SALDO TOTAL</h4>
                </div>
              </div>
            </div>

            {/* OTRA INFORMACIÓN */}
            <div className="div_content">
              <div className="div_cards">
                <Card className="card card_vencido">
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
                <Card className="card card_aVencer">
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
                <Card className="card card_total">
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
                <Card className="card card_total">
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
                <div className="card card_vencido">
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
                <div className="centrar card_aVencer">
                  <span>$0</span>
                  <h4>ACUERDO DE CRÉDITO</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar card_total">
                  <span>$0</span>
                  <h4>CRÉDITO DISPONIBLE</h4>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Dolar" key="2">
            {/* SALDOS */}
            <div className="div_content">
              <div className="div_cards">
                <div className="card card_vencido">
                  <div className="card_interna">
                    <div className="img">
                      <GiMoneyStack color="blue" />
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
                <div className="centrar card_aVencer">
                  <span>$0</span>
                  <h4>SALDO A VENCER</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar card_total">
                  <span>$0</span>
                  <h4>SALDO TOTAL</h4>
                </div>
              </div>
            </div>

            {/* OTRA INFORMACIÓN */}
            <div className="div_content">
              <div className="div_cards">
                <Card className="card card_vencido">
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
                <Card className="card card_aVencer">
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
                <Card className="card card_total">
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
                <Card className="card card_total">
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
                <div className="card card_vencido">
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
                <div className="centrar card_aVencer">
                  <span>$0</span>
                  <h4>ACUERDO DE CRÉDITO</h4>
                </div>
              </div>
              <div>
                <Divider className="divider" type="vertical" />
              </div>
              <div className="div_cards">
                <div className="centrar card_total">
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
