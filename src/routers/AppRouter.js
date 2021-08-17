import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { BrandingScreen } from "../components/branding/BrandingScreen";
import { ContactoScreen } from "../components/contacto/ContactoScreen";
import { DesarrolloScreen } from "../components/desarrollo/DesarrolloScreen";
import { DiseñoScreen } from "../components/diseño/DiseñoScreen";
import { InicioScreen } from "../components/inicio/InicioScreen";
import { NosotrosScreen } from "../components/nosotros/NosotrosScreen";
import { PautaScreen } from "../components/pauta/PautaScreen";
import { PortafolioScreen } from "../components/portafolio/PortafolioScreen";
import { RedesScreen } from "../components/redes/RedesScreen";
import { ServiciosScreen } from "../components/servicios/ServiciosScreen";
import { ScrollToTop } from "../components/ui/ScrollToTop";

export const AppRouter = () => {
    return (

        <Router>
            <ScrollToTop />
            < Switch>
                <Route exact path='/inicio' component={InicioScreen} />
                <Route exact path='/nosotros' component={NosotrosScreen} />
                <Route exact path='/servicios' component={ServiciosScreen} />
                <Route exact path='/portafolio' component={PortafolioScreen} />
                <Route exact path='/contacto' component={ContactoScreen} />
                <Route exact path='/pauta-digital' component={PautaScreen} />
                <Route exact path='/redes-sociales' component={RedesScreen} />
                <Route exact path='/desarrollo-web' component={DesarrolloScreen} />
                <Route exact path='/branding' component={BrandingScreen} />
                <Route exact path='/diseño-grafico' component={DiseñoScreen} />
                <Redirect to='/inicio' />
            </Switch>

        </Router>

    )
}
