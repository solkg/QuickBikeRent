import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink, HashRouter, Route, withRouter } from "react-router-dom";

/* import createHashHistory from "history/createHashHistory";
const history = createHashHistory(); */

const ul = {
  border: "solid",
  color: "black"
};

const navStyles = {
  color: "black",
  fontSize: "14px",
  padding: "5px",
  textDecoration: "none"
};

class Menu extends Component {
  render() {
    return (
      <div>
        <ul style={ul}>
          <NavLink style={navStyles} to="/">
            Hjem
          </NavLink>
          |
          <NavLink style={navStyles} to="/nykunde">
            Registrere kunde
          </NavLink>
          |
          <NavLink style={navStyles} to="/bestilling">
            Bestilling
          </NavLink>
          |
          <NavLink style={navStyles} to="/bestillingsoversikt">
            Bestillingsoversikt
          </NavLink>
          |
          <NavLink style={navStyles} to="/sykkelinfo">
            Sykkelinformasjon
          </NavLink>
          |
          <NavLink style={navStyles} to="/kundeinfo">
            Kundeinformasjon
          </NavLink>
          |
        </ul>
      </div>
    );
  }
}

class Qbr extends Component {
  nyKunde = () => {
    this.props.history.push("/nykunde");
  };

  bestilling = () => {
    this.props.history.push("/bestilling");
  };

  bestillinger = () => {
    this.props.history.push("/bestillingsoversikt");
  };

  kundeOversikt = () => {
    this.props.history.push("/kundeinfo");
  };

  sykkelOversikt = () => {
    this.props.history.push("/sykkelinfo");
  };

  faq = () => {
    this.props.history.push("/faq");
  };

  render() {
    return (
      <div>
        <center>
          <h1>Quick Bike Rent</h1>
          <button onClick={this.nyKunde}>Registrere kunde</button>
          <button onClick={this.bestilling}>Bestilling</button>
          <button onClick={this.bestillinger}>Bestillinger</button>
          <button onClick={this.kundeOversikt}>Kundeoversikt</button>
          <button onClick={this.sykkelOversikt}>Sykkeloversikt</button>
          <br /> <br />
          <img src="sykkel.jpg" width="45%" height="45%" />
          <br /> <br />
          <button style={{ float: "right" }} onClick={this.faq}>
            ?
          </button>
          <button style={{ float: "right" }} onClick={this.faq}>
            Feilmelding
          </button>
        </center>
      </div>
    );
  }
}

class Nykunde extends Component {
  navn = "";
  epost = "";
  adresse = "";
  telefon = "";

  render() {
    return (
      <div>
        <center>
          <h1>Registrere kunde</h1>
          Fornavn:
          <input type="text" />
          <br />
          Etternavn:
          <input type="text" />
          <br />
          Epost:
          <input type="text" />
          <br />
          Adresse:
          <input type="text" />
          <br />
          Telefon:
          <input type="text" />
          <br />
          <br />
          <button type="add" onClick={this.add}>
            Registrer kunde
          </button>
        </center>
      </div>
    );
  }
}

/*  add() {
    kundeService.addKunde(
      this.navn,
      this.epost,
      this.adresse,
      this.telefon,
      id => {
        history.push("/kunde/" + id);
      }
    );
  }
} */

class Bestilling extends Component {
  render() {
    return (
      <div>
        <h1>Legg til bestilling</h1>
        <form>
          Kunde: <input type="text" placeholder="Søk.." />
          Type sykkel:
          <select name="utstyr">
            <option value="1">Terreng</option>
            <option value="2">Barnesykkel</option>
            <option value="3">Damesykkel</option>
            <option value="4">Herresykkel</option>
          </select>
          Sykkelutstyr:
          <select name="utstyr">
            <option value="1">Kurv</option>
            <option value="2">Støttehjul</option>
            <option value="3">Lys</option>
          </select>
          <br />
          <br />
          <button style={{ display: "block", margin: "auto" }}>Legg til</button>
          <br />
          <br />
          Handlekurv: ---------------------------- Tidspunkt:
          ---------------------------- Lokasjon:
          <br />
          <br />
          <button style={{ display: "block", margin: "auto" }}>Bestill</button>
        </form>
      </div>
    );
  }
}

class Bestillingsoversikt extends Component {
  render() {
    return (
      <div>
        <center>
          <button>Slett</button>
          <button>Endre</button>
          <table>
            <tr>
              <th>Ordrenr</th>
              <th>Sykkel</th>
              <th>Utstyr</th>
              <th>Tid ut</th>
              <th>Tid inn</th>
              <th>Sted ut</th>
              <th>Sted inn</th>
              <th>Kunde</th>
              <th>Pris</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>12345</td>
              <td>Fjellsykkel</td>
              <td>Lys</td>
              <td>10.00</td>
              <td>20.00</td>
              <td>Steinkjer</td>
              <td>Namsos</td>
              <td>Per Nilsen</td>
              <td>350 kr</td>
              <td>Ikke levert</td>
            </tr>
          </table>
        </center>
      </div>
    );
  }
}

class Sykkelinformasjon extends Component {
  render() {
    return (
      <div>
        <center>
          <button>Slett</button>
          <button>Endre</button>
          <table>
            <tr>
              <th>Sykkel ID</th>
              <th>Sykkeltype</th>
              <th>Hjulsstørrelse</th>
              <th>Ramme</th>
              <th>Girsystem</th>
              <th>Tilhørighet</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>678748</td>
              <td>Terreng</td>
              <td>27,5"</td>
              <td>54 cm</td>
              <td>Shimano XT</td>
              <td>Finse</td>
              <td>Tilgjengelig</td>
            </tr>
          </table>
        </center>
      </div>
    );
  }
}

class Kundeinformasjon extends Component {
  render() {
    return (
      <div>
        <center>
          <button>Slett</button>
          <button>Endre</button>
          <table>
            <tr>
              <th>Kunde ID</th>
              <th>Navn</th>
              <th>Adresse</th>
              <th>Mobilnummer</th>
            </tr>
            <tr>
              <td>PN2222</td>
              <td>Per Kristian</td>
              <td>Per Nilsensvei 1</td>
              <td>22 22 55 55</td>
            </tr>
          </table>
        </center>
      </div>
    );
  }
}

class Faq extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Ofte stilte spørsmål: -------- Feilmelding</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            ligula neque eleifend risus, non rhoncus dui massa in felis.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            ligula neque eleifend risus, non rhoncus dui massa in felis.
          </p>
          <textarea
            rows="14"
            cols="50"
            placeholder="Skriv inn feilmelding her så svarer vi så fort som mulig!"
          />
          <br />
          <br />
          <button> Send inn </button>
        </center>
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact path="/" component={Qbr} />
      <Route path="/nykunde" component={Nykunde} />
      <Route path="/bestilling" component={Bestilling} />
      <Route path="/bestillingsoversikt" component={Bestillingsoversikt} />
      <Route path="/sykkelinfo" component={Sykkelinformasjon} />
      <Route path="/kundeinfo" component={Kundeinformasjon} />
      <Route path="/faq" component={Faq} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);
