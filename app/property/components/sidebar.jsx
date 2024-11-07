import "./sidebar.css";

import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  MapPinIcon,
  DocumentIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <div className="micro-9at text-bln">
      <div className="section-e6t pb-xe1">
        <ul className="nav-svv nav-6gq block-63t">
          <li className="nav-item-rvj">Organize Site Visit</li>
          <li className="nav-item-rvj">
            <ChatBubbleLeftIcon className="h-5 w-5 inline-block" /> Send us
            Whatsapp
          </li>
        </ul>
        <button className="btn-pm7 btn-tjz info-4em form-hok eff-yls eff-jqi mt-7er">
          <PhoneIcon className="h-5 w-5 inline-block" /> Request Call Back
        </button>
      </div>
      <span className="block-pw4 form-91l font-weight-k7b my-cb8">
        Pre-Register here for Best Offers
      </span>
      <form className="form-4al">
        <input type="hidden" name="btn" defaultValue="yes" id="btn-9t7" />
        <input
          type="hidden"
          name="url"
          defaultValue="ashar-merac-thane"
          id="btn-jg4"
        />
        <input
          type="hidden"
          name="project"
          defaultValue="Ashar Merac Thane"
          id="btn-le4"
        />
        <div className="form-group-gl5">
          <input
            type="text"
            name="name"
            className="form-control-f36 rounded-p3z field-qmw"
            placeholder="Name"
            id="nam-t4m"
          />
          <div className="error-pnj" />
        </div>
        <div className="form-group-gl5">
          <input
            type="hidden"
            id="ful-j98"
            name="fullMobileNo"
            defaultValue={+91}
          />
          <div className="hbggt dropdown-594">
            <div className="container-yn2">
              <div className="select-m2m">
                <div className="iti-vw6 iti-vnk" />
                <div className="row-ydb" />
              </div>
              <ul className="list-91p iti-iva">
                <li className="iti-so7">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-vnk" />
                  </div>
                  <span className="iti__country-hay">India (भारत)</span>
                  <span className="iti__dial-1ek">+91</span>
                </li>
                <li className="iti-m84" />
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-zff" />
                  </div>
                  <span className="iti__country-hay">
                    Afghanistan (‫افغانستان‬‎)
                  </span>
                  <span className="iti__dial-1ek">+93</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hix" />
                  </div>
                  <span className="iti__country-hay">Albania (Shqipëri)</span>
                  <span className="iti__dial-1ek">+355</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hi5" />
                  </div>
                  <span className="iti__country-hay">Algeria (‫الجزائر‬‎)</span>
                  <span className="iti__dial-1ek">+213</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-kft" />
                  </div>
                  <span className="iti__country-hay">American Samoa</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-x8f" />
                  </div>
                  <span className="iti__country-hay">Andorra</span>
                  <span className="iti__dial-1ek">+376</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ax1" />
                  </div>
                  <span className="iti__country-hay">Angola</span>
                  <span className="iti__dial-1ek">+244</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-3xj" />
                  </div>
                  <span className="iti__country-hay">Anguilla</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-cbo" />
                  </div>
                  <span className="iti__country-hay">Antigua and Barbuda</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4nq" />
                  </div>
                  <span className="iti__country-hay">Argentina</span>
                  <span className="iti__dial-1ek">+54</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hbg" />
                  </div>
                  <span className="iti__country-hay">Armenia (Հայաստան)</span>
                  <span className="iti__dial-1ek">+374</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-zt5" />
                  </div>
                  <span className="iti__country-hay">Aruba</span>
                  <span className="iti__dial-1ek">+297</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-b62" />
                  </div>
                  <span className="iti__country-hay">Australia</span>
                  <span className="iti__dial-1ek">+61</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4es" />
                  </div>
                  <span className="iti__country-hay">Austria (Österreich)</span>
                  <span className="iti__dial-1ek">+43</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-sac" />
                  </div>
                  <span className="iti__country-hay">
                    Azerbaijan (Azərbaycan)
                  </span>
                  <span className="iti__dial-1ek">+994</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-mpq" />
                  </div>
                  <span className="iti__country-hay">Bahamas</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-bzo" />
                  </div>
                  <span className="iti__country-hay">Bahrain (‫البحرين‬‎)</span>
                  <span className="iti__dial-1ek">+973</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-5of" />
                  </div>
                  <span className="iti__country-hay">
                    Bangladesh (বাংলাদেশ)
                  </span>
                  <span className="iti__dial-1ek">+880</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-gla" />
                  </div>
                  <span className="iti__country-hay">Barbados</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-w4d" />
                  </div>
                  <span className="iti__country-hay">Belarus (Беларусь)</span>
                  <span className="iti__dial-1ek">+375</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-1fi" />
                  </div>
                  <span className="iti__country-hay">Belgium (België)</span>
                  <span className="iti__dial-1ek">+32</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ir6" />
                  </div>
                  <span className="iti__country-hay">Belize</span>
                  <span className="iti__dial-1ek">+501</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-cmz" />
                  </div>
                  <span className="iti__country-hay">Benin (Bénin)</span>
                  <span className="iti__dial-1ek">+229</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-b62" />
                  </div>
                  <span className="iti__country-hay">Bermuda</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr" id="iti-h68">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-7i2" />
                  </div>
                  <span className="iti__country-hay">Bhutan (འབྲུག)</span>
                  <span className="iti__dial-1ek">+975</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-b1z" />
                  </div>
                  <span className="iti__country-hay">Bolivia</span>
                  <span className="iti__dial-1ek">+591</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ir5" />
                  </div>
                  <span className="iti__country-hay">
                    Bosnia and Herzegovina (Босна и Херцеговина)
                  </span>
                  <span className="iti__dial-1ek">+387</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-exo" />
                  </div>
                  <span className="iti__country-hay">Botswana</span>
                  <span className="iti__dial-1ek">+267</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ov6" />
                  </div>
                  <span className="iti__country-hay">Brazil (Brasil)</span>
                  <span className="iti__dial-1ek">+55</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ral" />
                  </div>
                  <span className="iti__country-hay">
                    British Indian Ocean Territory
                  </span>
                  <span className="iti__dial-1ek">+246</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-27o" />
                  </div>
                  <span className="iti__country-hay">
                    British Virgin Islands
                  </span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-oz7" />
                  </div>
                  <span className="iti__country-hay">Brunei</span>
                  <span className="iti__dial-1ek">+673</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jfg" />
                  </div>
                  <span className="iti__country-hay">Bulgaria (България)</span>
                  <span className="iti__dial-1ek">+359</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-1ek" />
                  </div>
                  <span className="iti__country-hay">Burkina Faso</span>
                  <span className="iti__dial-1ek">+226</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-2yw" />
                  </div>
                  <span className="iti__country-hay">Burundi (Uburundi)</span>
                  <span className="iti__dial-1ek">+257</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-b9c" />
                  </div>
                  <span className="iti__country-hay">Cambodia (កម្ពុជា)</span>
                  <span className="iti__dial-1ek">+855</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-1gd" />
                  </div>
                  <span className="iti__country-hay">Cameroon (Cameroun)</span>
                  <span className="iti__dial-1ek">+237</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-dje" />
                  </div>
                  <span className="iti__country-hay">Canada</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-y6m" />
                  </div>
                  <span className="iti__country-hay">
                    Cape Verde (Kabu Verdi)
                  </span>
                  <span className="iti__dial-1ek">+238</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-7cp" />
                  </div>
                  <span className="iti__country-hay">
                    Caribbean Netherlands
                  </span>
                  <span className="iti__dial-1ek">+599</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4ll" />
                  </div>
                  <span className="iti__country-hay">Cayman Islands</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-svy" />
                  </div>
                  <span className="iti__country-hay">
                    Central African Republic (République centrafricaine)
                  </span>
                  <span className="iti__dial-1ek">+236</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-bhi" />
                  </div>
                  <span className="iti__country-hay">Chad (Tchad)</span>
                  <span className="iti__dial-1ek">+235</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-lpg" />
                  </div>
                  <span className="iti__country-hay">Chile</span>
                  <span className="iti__dial-1ek">+56</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4fy" />
                  </div>
                  <span className="iti__country-hay">China (中国)</span>
                  <span className="iti__dial-1ek">+86</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ywc" />
                  </div>
                  <span className="iti__country-hay">Christmas Island</span>
                  <span className="iti__dial-1ek">+61</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-3iz" />
                  </div>
                  <span className="iti__country-hay">
                    Cocos (Keeling) Islands
                  </span>
                  <span className="iti__dial-1ek">+61</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ty2" />
                  </div>
                  <span className="iti__country-hay">Colombia</span>
                  <span className="iti__dial-1ek">+57</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-5ha" />
                  </div>
                  <span className="iti__country-hay">
                    Comoros (‫جزر القمر‬‎)
                  </span>
                  <span className="iti__dial-1ek">+269</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4ax" />
                  </div>
                  <span className="iti__country-hay">
                    Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)
                  </span>
                  <span className="iti__dial-1ek">+243</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ryk" />
                  </div>
                  <span className="iti__country-hay">
                    Congo (Republic) (Congo-Brazzaville)
                  </span>
                  <span className="iti__dial-1ek">+242</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ypw" />
                  </div>
                  <span className="iti__country-hay">Cook Islands</span>
                  <span className="iti__dial-1ek">+682</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-h5h" />
                  </div>
                  <span className="iti__country-hay">Costa Rica</span>
                  <span className="iti__dial-1ek">+506</span>
                </li>
                <li className="iti-so7 iti-2cr" id="iti-ipy">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-olo" />
                  </div>
                  <span className="iti__country-hay">Côte d'Ivoire</span>
                  <span className="iti__dial-1ek">+225</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-2i3" />
                  </div>
                  <span className="iti__country-hay">Croatia (Hrvatska)</span>
                  <span className="iti__dial-1ek">+385</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-f5x" />
                  </div>
                  <span className="iti__country-hay">Cuba</span>
                  <span className="iti__dial-1ek">+53</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-7q1" />
                  </div>
                  <span className="iti__country-hay">Curaçao</span>
                  <span className="iti__dial-1ek">+599</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-gda" />
                  </div>
                  <span className="iti__country-hay">Cyprus (Κύπρος)</span>
                  <span className="iti__dial-1ek">+357</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-9qr" />
                  </div>
                  <span className="iti__country-hay">
                    Czech Republic (Česká republika)
                  </span>
                  <span className="iti__dial-1ek">+420</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-55b" />
                  </div>
                  <span className="iti__country-hay">Denmark (Danmark)</span>
                  <span className="iti__dial-1ek">+45</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4jd" />
                  </div>
                  <span className="iti__country-hay">Djibouti</span>
                  <span className="iti__dial-1ek">+253</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-isi" />
                  </div>
                  <span className="iti__country-hay">Dominica</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-owg" />
                  </div>
                  <span className="iti__country-hay">
                    Dominican Republic (República Dominicana)
                  </span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-idk" />
                  </div>
                  <span className="iti__country-hay">Ecuador</span>
                  <span className="iti__dial-1ek">+593</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-1kp" />
                  </div>
                  <span className="iti__country-hay">Egypt (‫مصر‬‎)</span>
                  <span className="iti__dial-1ek">+20</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-b94" />
                  </div>
                  <span className="iti__country-hay">El Salvador</span>
                  <span className="iti__dial-1ek">+503</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-y5o" />
                  </div>
                  <span className="iti__country-hay">
                    Equatorial Guinea (Guinea Ecuatorial)
                  </span>
                  <span className="iti__dial-1ek">+240</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-apr" />
                  </div>
                  <span className="iti__country-hay">Eritrea</span>
                  <span className="iti__dial-1ek">+291</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-k6h" />
                  </div>
                  <span className="iti__country-hay">Estonia (Eesti)</span>
                  <span className="iti__dial-1ek">+372</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-qpc" />
                  </div>
                  <span className="iti__country-hay">Ethiopia</span>
                  <span className="iti__dial-1ek">+251</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-xeh" />
                  </div>
                  <span className="iti__country-hay">
                    Falkland Islands (Islas Malvinas)
                  </span>
                  <span className="iti__dial-1ek">+500</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ceq" />
                  </div>
                  <span className="iti__country-hay">
                    Faroe Islands (Føroyar)
                  </span>
                  <span className="iti__dial-1ek">+298</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-had" />
                  </div>
                  <span className="iti__country-hay">Fiji</span>
                  <span className="iti__dial-1ek">+679</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-n3t" />
                  </div>
                  <span className="iti__country-hay">Finland (Suomi)</span>
                  <span className="iti__dial-1ek">+358</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jyw" />
                  </div>
                  <span className="iti__country-hay">France</span>
                  <span className="iti__dial-1ek">+33</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-l74" />
                  </div>
                  <span className="iti__country-hay">
                    French Guiana (Guyane française)
                  </span>
                  <span className="iti__dial-1ek">+594</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-tmd" />
                  </div>
                  <span className="iti__country-hay">
                    French Polynesia (Polynésie française)
                  </span>
                  <span className="iti__dial-1ek">+689</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-wdl" />
                  </div>
                  <span className="iti__country-hay">Gabon</span>
                  <span className="iti__dial-1ek">+241</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-mq8" />
                  </div>
                  <span className="iti__country-hay">Gambia</span>
                  <span className="iti__dial-1ek">+220</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-sck" />
                  </div>
                  <span className="iti__country-hay">Georgia (საქართველო)</span>
                  <span className="iti__dial-1ek">+995</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-m6i" />
                  </div>
                  <span className="iti__country-hay">
                    Germany (Deutschland)
                  </span>
                  <span className="iti__dial-1ek">+49</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-qci" />
                  </div>
                  <span className="iti__country-hay">Ghana (Gaana)</span>
                  <span className="iti__dial-1ek">+233</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-beg" />
                  </div>
                  <span className="iti__country-hay">Gibraltar</span>
                  <span className="iti__dial-1ek">+350</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-m5y" />
                  </div>
                  <span className="iti__country-hay">Greece (Ελλάδα)</span>
                  <span className="iti__dial-1ek">+30</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-qrn" />
                  </div>
                  <span className="iti__country-hay">
                    Greenland (Kalaallit Nunaat)
                  </span>
                  <span className="iti__dial-1ek">+299</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-2cr" />
                  </div>
                  <span className="iti__country-hay">Grenada</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-i69" />
                  </div>
                  <span className="iti__country-hay">Guadeloupe</span>
                  <span className="iti__dial-1ek">+590</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-h68" />
                  </div>
                  <span className="iti__country-hay">Guam</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-den" />
                  </div>
                  <span className="iti__country-hay">Guatemala</span>
                  <span className="iti__dial-1ek">+502</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-fwz" />
                  </div>
                  <span className="iti__country-hay">Guernsey</span>
                  <span className="iti__dial-1ek">+44</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-apd" />
                  </div>
                  <span className="iti__country-hay">Guinea (Guinée)</span>
                  <span className="iti__dial-1ek">+224</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ol6" />
                  </div>
                  <span className="iti__country-hay">
                    Guinea-Bissau (Guiné Bissau)
                  </span>
                  <span className="iti__dial-1ek">+245</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-g3d" />
                  </div>
                  <span className="iti__country-hay">Guyana</span>
                  <span className="iti__dial-1ek">+592</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-1z1" />
                  </div>
                  <span className="iti__country-hay">Haiti</span>
                  <span className="iti__dial-1ek">+509</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-fer" />
                  </div>
                  <span className="iti__country-hay">Honduras</span>
                  <span className="iti__dial-1ek">+504</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-gsp" />
                  </div>
                  <span className="iti__country-hay">Hong Kong (香港)</span>
                  <span className="iti__dial-1ek">+852</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-eo7" />
                  </div>
                  <span className="iti__country-hay">
                    Hungary (Magyarország)
                  </span>
                  <span className="iti__dial-1ek">+36</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-9ko" />
                  </div>
                  <span className="iti__country-hay">Iceland (Ísland)</span>
                  <span className="iti__dial-1ek">+354</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-vnk" />
                  </div>
                  <span className="iti__country-hay">India (भारत)</span>
                  <span className="iti__dial-1ek">+91</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-9w4" />
                  </div>
                  <span className="iti__country-hay">Indonesia</span>
                  <span className="iti__dial-1ek">+62</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-yh9" />
                  </div>
                  <span className="iti__country-hay">Iran (‫ایران‬‎)</span>
                  <span className="iti__dial-1ek">+98</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-9pt" />
                  </div>
                  <span className="iti__country-hay">Iraq (‫العراق‬‎)</span>
                  <span className="iti__dial-1ek">+964</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-1bq" />
                  </div>
                  <span className="iti__country-hay">Ireland</span>
                  <span className="iti__dial-1ek">+353</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-eoo" />
                  </div>
                  <span className="iti__country-hay">Isle of Man</span>
                  <span className="iti__dial-1ek">+44</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-isv" />
                  </div>
                  <span className="iti__country-hay">Israel (‫ישראל‬‎)</span>
                  <span className="iti__dial-1ek">+972</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-e7c" />
                  </div>
                  <span className="iti__country-hay">Italy (Italia)</span>
                  <span className="iti__dial-1ek">+39</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-fan" />
                  </div>
                  <span className="iti__country-hay">Jamaica</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-31z" />
                  </div>
                  <span className="iti__country-hay">Japan (日本)</span>
                  <span className="iti__dial-1ek">+81</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-pld" />
                  </div>
                  <span className="iti__country-hay">Jersey</span>
                  <span className="iti__dial-1ek">+44</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hs6" />
                  </div>
                  <span className="iti__country-hay">Jordan (‫الأردن‬‎)</span>
                  <span className="iti__dial-1ek">+962</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4ms" />
                  </div>
                  <span className="iti__country-hay">
                    Kazakhstan (Казахстан)
                  </span>
                  <span className="iti__dial-1ek">+7</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-a72" />
                  </div>
                  <span className="iti__country-hay">Kenya</span>
                  <span className="iti__dial-1ek">+254</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jon" />
                  </div>
                  <span className="iti__country-hay">Kiribati</span>
                  <span className="iti__dial-1ek">+686</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-p8s" />
                  </div>
                  <span className="iti__country-hay">Kosovo</span>
                  <span className="iti__dial-1ek">+383</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-m5f" />
                  </div>
                  <span className="iti__country-hay">Kuwait (‫الكويت‬‎)</span>
                  <span className="iti__dial-1ek">+965</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-rvb" />
                  </div>
                  <span className="iti__country-hay">
                    Kyrgyzstan (Кыргызстан)
                  </span>
                  <span className="iti__dial-1ek">+996</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-sy5" />
                  </div>
                  <span className="iti__country-hay">Laos (ລາວ)</span>
                  <span className="iti__dial-1ek">+856</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ksr" />
                  </div>
                  <span className="iti__country-hay">Latvia (Latvija)</span>
                  <span className="iti__dial-1ek">+371</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-oe5" />
                  </div>
                  <span className="iti__country-hay">Lebanon (‫لبنان‬‎)</span>
                  <span className="iti__dial-1ek">+961</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-7p2" />
                  </div>
                  <span className="iti__country-hay">Lesotho</span>
                  <span className="iti__dial-1ek">+266</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-9kf" />
                  </div>
                  <span className="iti__country-hay">Liberia</span>
                  <span className="iti__dial-1ek">+231</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ol9" />
                  </div>
                  <span className="iti__country-hay">Libya (‫ليبيا‬‎)</span>
                  <span className="iti__dial-1ek">+218</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ofj" />
                  </div>
                  <span className="iti__country-hay">Liechtenstein</span>
                  <span className="iti__dial-1ek">+423</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-dsp" />
                  </div>
                  <span className="iti__country-hay">Lithuania (Lietuva)</span>
                  <span className="iti__dial-1ek">+370</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-j2r" />
                  </div>
                  <span className="iti__country-hay">Luxembourg</span>
                  <span className="iti__dial-1ek">+352</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ifb" />
                  </div>
                  <span className="iti__country-hay">Macau (澳門)</span>
                  <span className="iti__dial-1ek">+853</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-j7o" />
                  </div>
                  <span className="iti__country-hay">
                    Macedonia (FYROM) (Македонија)
                  </span>
                  <span className="iti__dial-1ek">+389</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-z46" />
                  </div>
                  <span className="iti__country-hay">
                    Madagascar (Madagasikara)
                  </span>
                  <span className="iti__dial-1ek">+261</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hca" />
                  </div>
                  <span className="iti__country-hay">Malawi</span>
                  <span className="iti__dial-1ek">+265</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-l8l" />
                  </div>
                  <span className="iti__country-hay">Malaysia</span>
                  <span className="iti__dial-1ek">+60</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-so3" />
                  </div>
                  <span className="iti__country-hay">Maldives</span>
                  <span className="iti__dial-1ek">+960</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-o8g" />
                  </div>
                  <span className="iti__country-hay">Mali</span>
                  <span className="iti__dial-1ek">+223</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-py4" />
                  </div>
                  <span className="iti__country-hay">Malta</span>
                  <span className="iti__dial-1ek">+356</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-15b" />
                  </div>
                  <span className="iti__country-hay">Marshall Islands</span>
                  <span className="iti__dial-1ek">+692</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-12r" />
                  </div>
                  <span className="iti__country-hay">Martinique</span>
                  <span className="iti__dial-1ek">+596</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-lo3" />
                  </div>
                  <span className="iti__country-hay">
                    Mauritania (‫موريتانيا‬‎)
                  </span>
                  <span className="iti__dial-1ek">+222</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-6l4" />
                  </div>
                  <span className="iti__country-hay">Mauritius (Moris)</span>
                  <span className="iti__dial-1ek">+230</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-95k" />
                  </div>
                  <span className="iti__country-hay">Mayotte</span>
                  <span className="iti__dial-1ek">+262</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-nyt" />
                  </div>
                  <span className="iti__country-hay">Mexico (México)</span>
                  <span className="iti__dial-1ek">+52</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-n74" />
                  </div>
                  <span className="iti__country-hay">Micronesia</span>
                  <span className="iti__dial-1ek">+691</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jms" />
                  </div>
                  <span className="iti__country-hay">
                    Moldova (Republica Moldova)
                  </span>
                  <span className="iti__dial-1ek">+373</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hll" />
                  </div>
                  <span className="iti__country-hay">Monaco</span>
                  <span className="iti__dial-1ek">+377</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-g92" />
                  </div>
                  <span className="iti__country-hay">Mongolia (Монгол)</span>
                  <span className="iti__dial-1ek">+976</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-2ze" />
                  </div>
                  <span className="iti__country-hay">
                    Montenegro (Crna Gora)
                  </span>
                  <span className="iti__dial-1ek">+382</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-owd" />
                  </div>
                  <span className="iti__country-hay">Montserrat</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-dqq" />
                  </div>
                  <span className="iti__country-hay">Morocco (‫المغرب‬‎)</span>
                  <span className="iti__dial-1ek">+212</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jk9" />
                  </div>
                  <span className="iti__country-hay">
                    Mozambique (Moçambique)
                  </span>
                  <span className="iti__dial-1ek">+258</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-qmq" />
                  </div>
                  <span className="iti__country-hay">
                    Myanmar (Burma) (မြန်မာ)
                  </span>
                  <span className="iti__dial-1ek">+95</span>
                </li>
                <li className="iti-so7 iti-2cr" id="iti-kft">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-6d8" />
                  </div>
                  <span className="iti__country-hay">Namibia (Namibië)</span>
                  <span className="iti__dial-1ek">+264</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-n5f" />
                  </div>
                  <span className="iti__country-hay">Nauru</span>
                  <span className="iti__dial-1ek">+674</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4il" />
                  </div>
                  <span className="iti__country-hay">Nepal (नेपाल)</span>
                  <span className="iti__dial-1ek">+977</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-dwq" />
                  </div>
                  <span className="iti__country-hay">
                    Netherlands (Nederland)
                  </span>
                  <span className="iti__dial-1ek">+31</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-xkj" />
                  </div>
                  <span className="iti__country-hay">
                    New Caledonia (Nouvelle-Calédonie)
                  </span>
                  <span className="iti__dial-1ek">+687</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-7vq" />
                  </div>
                  <span className="iti__country-hay">New Zealand</span>
                  <span className="iti__dial-1ek">+64</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4sh" />
                  </div>
                  <span className="iti__country-hay">Nicaragua</span>
                  <span className="iti__dial-1ek">+505</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-9gp" />
                  </div>
                  <span className="iti__country-hay">Niger (Nijar)</span>
                  <span className="iti__dial-1ek">+227</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-lsj" />
                  </div>
                  <span className="iti__country-hay">Nigeria</span>
                  <span className="iti__dial-1ek">+234</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jkz" />
                  </div>
                  <span className="iti__country-hay">Niue</span>
                  <span className="iti__dial-1ek">+683</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-nyj" />
                  </div>
                  <span className="iti__country-hay">Norfolk Island</span>
                  <span className="iti__dial-1ek">+672</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-3eg" />
                  </div>
                  <span className="iti__country-hay">
                    North Korea (조선 민주주의 인민 공화국)
                  </span>
                  <span className="iti__dial-1ek">+850</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-zbs" />
                  </div>
                  <span className="iti__country-hay">
                    Northern Mariana Islands
                  </span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-x9p" />
                  </div>
                  <span className="iti__country-hay">Norway (Norge)</span>
                  <span className="iti__dial-1ek">+47</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-oi1" />
                  </div>
                  <span className="iti__country-hay">Oman (‫عُمان‬‎)</span>
                  <span className="iti__dial-1ek">+968</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-pll" />
                  </div>
                  <span className="iti__country-hay">
                    Pakistan (‫پاکستان‬‎)
                  </span>
                  <span className="iti__dial-1ek">+92</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-prk" />
                  </div>
                  <span className="iti__country-hay">Palau</span>
                  <span className="iti__dial-1ek">+680</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-8oo" />
                  </div>
                  <span className="iti__country-hay">
                    Palestine (‫فلسطين‬‎)
                  </span>
                  <span className="iti__dial-1ek">+970</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-n2f" />
                  </div>
                  <span className="iti__country-hay">Panama (Panamá)</span>
                  <span className="iti__dial-1ek">+507</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ipy" />
                  </div>
                  <span className="iti__country-hay">Papua New Guinea</span>
                  <span className="iti__dial-1ek">+675</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-abc" />
                  </div>
                  <span className="iti__country-hay">Paraguay</span>
                  <span className="iti__dial-1ek">+595</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-q1o" />
                  </div>
                  <span className="iti__country-hay">Peru (Perú)</span>
                  <span className="iti__dial-1ek">+51</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-6o8" />
                  </div>
                  <span className="iti__country-hay">Philippines</span>
                  <span className="iti__dial-1ek">+63</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-6oo" />
                  </div>
                  <span className="iti__country-hay">Poland (Polska)</span>
                  <span className="iti__dial-1ek">+48</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-olk" />
                  </div>
                  <span className="iti__country-hay">Portugal</span>
                  <span className="iti__dial-1ek">+351</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-afm" />
                  </div>
                  <span className="iti__country-hay">Puerto Rico</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-m9m" />
                  </div>
                  <span className="iti__country-hay">Qatar (‫قطر‬‎)</span>
                  <span className="iti__dial-1ek">+974</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-2mc" />
                  </div>
                  <span className="iti__country-hay">Réunion (La Réunion)</span>
                  <span className="iti__dial-1ek">+262</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-oqm" />
                  </div>
                  <span className="iti__country-hay">Romania (România)</span>
                  <span className="iti__dial-1ek">+40</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-pnv" />
                  </div>
                  <span className="iti__country-hay">Russia (Россия)</span>
                  <span className="iti__dial-1ek">+7</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-b5p" />
                  </div>
                  <span className="iti__country-hay">Rwanda</span>
                  <span className="iti__dial-1ek">+250</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-h1e" />
                  </div>
                  <span className="iti__country-hay">Saint Barthélemy</span>
                  <span className="iti__dial-1ek">+590</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-zfp" />
                  </div>
                  <span className="iti__country-hay">Saint Helena</span>
                  <span className="iti__dial-1ek">+290</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-g7d" />
                  </div>
                  <span className="iti__country-hay">
                    Saint Kitts and Nevis
                  </span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jx8" />
                  </div>
                  <span className="iti__country-hay">Saint Lucia</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-s8p" />
                  </div>
                  <span className="iti__country-hay">
                    Saint Martin (Saint-Martin (partie française))
                  </span>
                  <span className="iti__dial-1ek">+590</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hd5" />
                  </div>
                  <span className="iti__country-hay">
                    Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)
                  </span>
                  <span className="iti__dial-1ek">+508</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-8vv" />
                  </div>
                  <span className="iti__country-hay">
                    Saint Vincent and the Grenadines
                  </span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-zk6" />
                  </div>
                  <span className="iti__country-hay">Samoa</span>
                  <span className="iti__dial-1ek">+685</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jxj" />
                  </div>
                  <span className="iti__country-hay">San Marino</span>
                  <span className="iti__dial-1ek">+378</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-iqa" />
                  </div>
                  <span className="iti__country-hay">
                    São Tomé and Príncipe (São Tomé e Príncipe)
                  </span>
                  <span className="iti__dial-1ek">+239</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-qar" />
                  </div>
                  <span className="iti__country-hay">
                    Saudi Arabia (‫المملكة العربية السعودية‬‎)
                  </span>
                  <span className="iti__dial-1ek">+966</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-caf" />
                  </div>
                  <span className="iti__country-hay">Senegal (Sénégal)</span>
                  <span className="iti__dial-1ek">+221</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-m65" />
                  </div>
                  <span className="iti__country-hay">Serbia (Србија)</span>
                  <span className="iti__dial-1ek">+381</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-5lw" />
                  </div>
                  <span className="iti__country-hay">Seychelles</span>
                  <span className="iti__dial-1ek">+248</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-bf5" />
                  </div>
                  <span className="iti__country-hay">Sierra Leone</span>
                  <span className="iti__dial-1ek">+232</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hwj" />
                  </div>
                  <span className="iti__country-hay">Singapore</span>
                  <span className="iti__dial-1ek">+65</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-1ia" />
                  </div>
                  <span className="iti__country-hay">Sint Maarten</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-n98" />
                  </div>
                  <span className="iti__country-hay">Slovakia (Slovensko)</span>
                  <span className="iti__dial-1ek">+421</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-2rf" />
                  </div>
                  <span className="iti__country-hay">Slovenia (Slovenija)</span>
                  <span className="iti__dial-1ek">+386</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-k2d" />
                  </div>
                  <span className="iti__country-hay">Solomon Islands</span>
                  <span className="iti__dial-1ek">+677</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-5rv" />
                  </div>
                  <span className="iti__country-hay">Somalia (Soomaaliya)</span>
                  <span className="iti__dial-1ek">+252</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-57w" />
                  </div>
                  <span className="iti__country-hay">South Africa</span>
                  <span className="iti__dial-1ek">+27</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-o3c" />
                  </div>
                  <span className="iti__country-hay">
                    South Korea (대한민국)
                  </span>
                  <span className="iti__dial-1ek">+82</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-6zm" />
                  </div>
                  <span className="iti__country-hay">
                    South Sudan (‫جنوب السودان‬‎)
                  </span>
                  <span className="iti__dial-1ek">+211</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-y8x" />
                  </div>
                  <span className="iti__country-hay">Spain (España)</span>
                  <span className="iti__dial-1ek">+34</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-kpl" />
                  </div>
                  <span className="iti__country-hay">
                    Sri Lanka (ශ්‍රී ලංකාව)
                  </span>
                  <span className="iti__dial-1ek">+94</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-l51" />
                  </div>
                  <span className="iti__country-hay">Sudan (‫السودان‬‎)</span>
                  <span className="iti__dial-1ek">+249</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-828" />
                  </div>
                  <span className="iti__country-hay">Suriname</span>
                  <span className="iti__dial-1ek">+597</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-qnl" />
                  </div>
                  <span className="iti__country-hay">
                    Svalbard and Jan Mayen
                  </span>
                  <span className="iti__dial-1ek">+47</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-r4n" />
                  </div>
                  <span className="iti__country-hay">Swaziland</span>
                  <span className="iti__dial-1ek">+268</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jcn" />
                  </div>
                  <span className="iti__country-hay">Sweden (Sverige)</span>
                  <span className="iti__dial-1ek">+46</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-qsd" />
                  </div>
                  <span className="iti__country-hay">
                    Switzerland (Schweiz)
                  </span>
                  <span className="iti__dial-1ek">+41</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-wa3" />
                  </div>
                  <span className="iti__country-hay">Syria (‫سوريا‬‎)</span>
                  <span className="iti__dial-1ek">+963</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-pxa" />
                  </div>
                  <span className="iti__country-hay">Taiwan (台灣)</span>
                  <span className="iti__dial-1ek">+886</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-34y" />
                  </div>
                  <span className="iti__country-hay">Tajikistan</span>
                  <span className="iti__dial-1ek">+992</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-b8z" />
                  </div>
                  <span className="iti__country-hay">Tanzania</span>
                  <span className="iti__dial-1ek">+255</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-bxp" />
                  </div>
                  <span className="iti__country-hay">Thailand (ไทย)</span>
                  <span className="iti__dial-1ek">+66</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-lp8" />
                  </div>
                  <span className="iti__country-hay">Timor-Leste</span>
                  <span className="iti__dial-1ek">+670</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-gyn" />
                  </div>
                  <span className="iti__country-hay">Togo</span>
                  <span className="iti__dial-1ek">+228</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-fjn" />
                  </div>
                  <span className="iti__country-hay">Tokelau</span>
                  <span className="iti__dial-1ek">+690</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-df6" />
                  </div>
                  <span className="iti__country-hay">Tonga</span>
                  <span className="iti__dial-1ek">+676</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-ppz" />
                  </div>
                  <span className="iti__country-hay">Trinidad and Tobago</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jc6" />
                  </div>
                  <span className="iti__country-hay">Tunisia (‫تونس‬‎)</span>
                  <span className="iti__dial-1ek">+216</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-roo" />
                  </div>
                  <span className="iti__country-hay">Turkey (Türkiye)</span>
                  <span className="iti__dial-1ek">+90</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-rqw" />
                  </div>
                  <span className="iti__country-hay">Turkmenistan</span>
                  <span className="iti__dial-1ek">+993</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-hqr" />
                  </div>
                  <span className="iti__country-hay">
                    Turks and Caicos Islands
                  </span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-fjy" />
                  </div>
                  <span className="iti__country-hay">Tuvalu</span>
                  <span className="iti__dial-1ek">+688</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-5iy" />
                  </div>
                  <span className="iti__country-hay">U.S. Virgin Islands</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-vkr" />
                  </div>
                  <span className="iti__country-hay">Uganda</span>
                  <span className="iti__dial-1ek">+256</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-c44" />
                  </div>
                  <span className="iti__country-hay">Ukraine (Україна)</span>
                  <span className="iti__dial-1ek">+380</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-jb5" />
                  </div>
                  <span className="iti__country-hay">
                    United Arab Emirates (‫الإمارات العربية المتحدة‬‎)
                  </span>
                  <span className="iti__dial-1ek">+971</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-sio" />
                  </div>
                  <span className="iti__country-hay">United Kingdom</span>
                  <span className="iti__dial-1ek">+44</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-tyy" />
                  </div>
                  <span className="iti__country-hay">United States</span>
                  <span className="iti__dial-1ek">+1</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4ri" />
                  </div>
                  <span className="iti__country-hay">Uruguay</span>
                  <span className="iti__dial-1ek">+598</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-a1h" />
                  </div>
                  <span className="iti__country-hay">
                    Uzbekistan (Oʻzbekiston)
                  </span>
                  <span className="iti__dial-1ek">+998</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-7ll" />
                  </div>
                  <span className="iti__country-hay">Vanuatu</span>
                  <span className="iti__dial-1ek">+678</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-edg" />
                  </div>
                  <span className="iti__country-hay">
                    Vatican City (Città del Vaticano)
                  </span>
                  <span className="iti__dial-1ek">+39</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-rty" />
                  </div>
                  <span className="iti__country-hay">Venezuela</span>
                  <span className="iti__dial-1ek">+58</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-4c5" />
                  </div>
                  <span className="iti__country-hay">Vietnam (Việt Nam)</span>
                  <span className="iti__dial-1ek">+84</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-m5v" />
                  </div>
                  <span className="iti__country-hay">
                    Wallis and Futuna (Wallis-et-Futuna)
                  </span>
                  <span className="iti__dial-1ek">+681</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-q31" />
                  </div>
                  <span className="iti__country-hay">
                    Western Sahara (‫الصحراء الغربية‬‎)
                  </span>
                  <span className="iti__dial-1ek">+212</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-6qt" />
                  </div>
                  <span className="iti__country-hay">Yemen (‫اليمن‬‎)</span>
                  <span className="iti__dial-1ek">+967</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-gc6" />
                  </div>
                  <span className="iti__country-hay">Zambia</span>
                  <span className="iti__dial-1ek">+260</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-d99" />
                  </div>
                  <span className="iti__country-hay">Zimbabwe</span>
                  <span className="iti__dial-1ek">+263</span>
                </li>
                <li className="iti-so7 iti-2cr">
                  <div className="box-otr">
                    <div className="iti-vw6 iti-tzp" />
                  </div>
                  <span className="iti__country-hay">Åland Islands</span>
                  <span className="iti__dial-1ek">+358</span>
                </li>
              </ul>
            </div>
            <input
              type="tel"
              id="mob-eh4"
              name="mobile"
              className="form-control-f36 rounded-p3z field-qmw w-5z4"
              placeholder="Mobile No"
            />
          </div>
          <div className="error-pnj" />
        </div>
        <input
          type="hidden"
          name="enquiry"
          id="enq-z34"
          defaultValue="Pre-Register here for Best Offers"
        />
        <div className="form-group-gl5">
          <input
            type="email"
            name="email"
            className="form-control-f36 rounded-p3z field-qmw"
            placeholder="E-Mail Address"
            id="ema-vxf"
          />
          <div className="error-pnj" />
        </div>
        <div>
          <div
            className="badge-nqp"
            style={{
              width: "256px",
              height: "60px",
              position: "fixed",
              visibility: "hidden",
            }}
          >
            <div>
              <iframe
                width={256}
                height={60}
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LehTr0mAAAAAFQbgFdg-lOR4Tvlv4Afwl3pFlLv&co=aHR0cHM6Ly9uZXdwcm9qZWN0c29ubGluZS5jb206NDQz&hl=en&v=lqsTZ5beIbCkK4uGEGv9JmUR&size=invisible&sa=submit&cb=7ah60116kvho"
              />
            </div>
            <div />
            <textarea
              style={{
                width: "250px",
                height: "40px",
                border: "1px solid rgb(193, 193, 193)",
                margin: "10px 25px",
                padding: "0px",
                resize: "none",
                display: "none",
              }}
              defaultValue={""}
            />
          </div>
        </div>
        <button className="btn-pm7 info-4em form-een mt-oxz eff-dwh">
          Pre-Register Now
        </button>
      </form>
      <p className="animate-4y8">
        Call Us :{" "}
        <a href="tel:+919892666207">
          <PhoneIcon className="h-4 w-4 inline-block" /> +91 9892666207
        </a>
      </p>
      <p className="dlres">
        <a href="#">
          Book A Site Visit &nbsp;&nbsp;
          <HomeIcon className="h-5 w-5 inline-block" />
        </a>
      </p>
      <ul className="animate-4y8">
        <li>
          {" "}
          <span>✓ Configurations</span> : 1, 2, 3 BHK{" "}
        </li>
        <li>
          {" "}
          <span>✓ Location</span> : Thane, Mumbai
        </li>
        <li>
          {" "}
          <span>✓ Price </span> : 85 Lac* All Incl. Onwards
        </li>
      </ul>
      <div className="social-share-container">
        <p>Share This Project On Social Media</p>
        <div className="social-icons">
          <a href="http://www.facebook.com/sharer.php?u=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane&title=Share This Project in social media')">
            <img
              src="https://newprojectsonline.com/assets/img/comman/facebook.png"
              width={30}
              height={30}
              alt="Share on Facebook"
            />
          </a>
          <a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane&title=Share This Project in social media')">
            <img
              src="https://newprojectsonline.com/assets/img/comman/linkedin.png"
              width={30}
              height={30}
              alt="Share on LinkedIn"
            />
          </a>
          <a href="https://twitter.com/share?url=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane&title=Share This Project in social media')">
            <img
              src="https://newprojectsonline.com/assets/img/comman/twitter.png"
              width={30}
              height={30}
              alt="Share on Twitter"
            />
          </a>
          <a href="https://wa.me/?text=http%3A%2F%2Fnewprojectsonline.com%2Fashar-merac-thane&title=Share This Project in social media')">
            <img
              src="https://newprojectsonline.com/assets/img/comman/whatsapp.png"
              width={30}
              height={30}
              alt="Share on WhatsApp"
            />
          </a>
        </div>
      </div>
      <div className="link-ec4">
        <a href="tel:+919892666207">
          <PhoneIcon className="h-6 w-6" />
        </a>
        <a href="#">
          <EnvelopeIcon className="h-6 w-6" />
        </a>
        <a href="#">
          <ChatBubbleLeftIcon className="h-6 w-6" />
        </a>
        <a href="#">
          <MapPinIcon className="h-6 w-6" />
        </a>
        <a href="#">
          <DocumentIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
