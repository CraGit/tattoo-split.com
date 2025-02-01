import { Header } from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export function Layout({ locales, navigation, settings, children }) {
  return (
    <div className="text-slate-800">
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main>{children}</main>
      <WhatsAppButton settings={settings} />
      <Footer settings={settings} />
    </div>
  );
}
