import Company from "./components/CompanySection/Company";
import Main from "./components/main/main";
import News from "./components/news/news";
import Section from "./components/section/section";
import "./globals.css"

export default function Home() {
  return (
    <>
      <Main />
      <Section />
      <Company/>
      <News/>
    </>

  );
}
