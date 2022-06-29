import { gql } from "@apollo/client";

export const GET_FINANZAS = gql`
  query getAgroConsolidado($idCliente: Int) {
    getAgroConsolidadoIframeResolver(idCliente: $idCliente)
  }
`;
