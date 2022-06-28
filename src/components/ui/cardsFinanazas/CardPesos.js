import { Card, Divider } from "antd";
import React from "react";
import "./Card.css";
import { GiJerrycan, GiMoneyStack, GiSwipeCard, GiTicket, GiWheat } from "react-icons/gi";

const CardPesos = () => {
  return (
    <>
      {/* SALDOS */}
      <div className="div_content">
        <div className="div_cards">
          <div className="card card_vencido">
            <div className="card_interna">
              <div className="img">
                <GiMoneyStack />
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
                <GiTicket />
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
                <GiJerrycan />
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
                <GiWheat />
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
                <GiSwipeCard />
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
    </>
  );
};

export default CardPesos;
