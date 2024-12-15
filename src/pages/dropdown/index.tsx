import Header from "components/mainHeader";
import useCustomNavigation from "../../hooks/useCustomNavigation";

export default function DropDown() {
  const { goToPath } = useCustomNavigation();

  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <section className="content_main_page">
          <div
            className="thumbnail_main"
            onClick={() => {
              goToPath("dropdowntype1");
            }}
          >
            <div className="thumbnail_image"></div>
            <div className="thumbnail_main_title">타입 1</div>
          </div>
          <div
            className="thumbnail_main"
            onClick={() => {
              goToPath("dropdowntype2");
            }}
          >
            <div className="thumbnail_image"></div>
            <div className="thumbnail_main_title">타입 2</div>
          </div>
        </section>
      </main>
    </>
  );
}
