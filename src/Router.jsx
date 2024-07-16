import { Route, Routes } from "react-router-dom";
import {
  Optin,
  Successful,
  Replay,
  Article,
  LongForm,
  Payment,
  Terms,
  Privacy,
  Disclaimer,Faq,
  Ielts_cheat_code,
  } from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Optin />}>
          Optin
        </Route>
        <Route path="/bridge" element={<Successful />}>
          Successful
        </Route>
        <Route path="/replay" element={<Replay />}>
          Replay
        </Route>
        <Route path="/article" element={<Article />}>
          Article
        </Route>
        <Route path="/pp" element={<LongForm />}>
          Long Form
        </Route>
        <Route path="/payment" element={<Payment />}>
          Payment
        </Route>
        <Route path="/terms" element={<Terms />}>
          Terms
        </Route>
        <Route path="/privacy" element={<Privacy />}>
          Privacy
        </Route>
        <Route path="/disclaimer" element={<Disclaimer />}>
          Disclaimer
        </Route>
        <Route path="/f" element={<Faq />}>
          FAQ
        </Route>
        <Route path="/free-ielts-training" element={<Ielts_cheat_code />}>
          Ielts_cheat_code 
          </Route>      
       </Routes>
    </>
  );
};

export default Router;
