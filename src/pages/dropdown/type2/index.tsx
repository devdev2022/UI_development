import { useState } from "react";
import Header from "components/mainHeader";

//hook
import useOutsideClick from "../../../hooks/useOutsideClick";

//data
import dropDownData from "../../../mockData/dropDown.json";

//이미지
import { ReactComponent as Arrow } from "../../../assets/icon_arrow_select.svg";

export default function Type1() {
  const [checkData, setCheckData] = useState(
    [
      ...new Set(
        dropDownData.data.map((value) => {
          return value.business_name;
        })
      ),
    ].map((value) => {
      return { brandName: value, checked: false };
    })
  );
  const [isActive, setIsActive] = useState(false);
  const [garmentList, setGarmentList] = useState([]);

  const ref = useOutsideClick({
    onClickOutside() {
      setIsActive(false);
    },
  });

  const toggleDropdown = () => {
    setIsActive((prev) => !prev);
  };

  const checkCondition = (selected: any) => {
    const checkedValue = selected.target.value;

    const updatedBrandCheck = checkData.map((item) => {
      if (item.brandName === checkedValue) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    if (!updatedBrandCheck.some((item) => item.brandName === checkedValue)) {
      updatedBrandCheck.push({
        brandName: checkedValue,
        checked: true,
      });
    }

    updatedBrandCheck
      .filter((value) => {
        return value.checked === true;
      })
      .map((mvalue) => {
        return mvalue.brandName;
      });

    setCheckData(updatedBrandCheck);

    const filteredBrandList = updatedBrandCheck
      .filter((value) => {
        return value.checked === true;
      })
      .map((mvalue) => mvalue.brandName);

    const filteredData = [];

    for (const item of dropDownData.data) {
      if (filteredBrandList.includes(item.business_name)) {
        filteredData.push(item);
      }
    }
    setGarmentList(filteredData);
  };

  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <section className="dropdown-layout">
          <div className="dropdown_area">
            <div className="box_select2" ref={ref}>
              <button
                className={`select2 ${isActive ? "active" : ""}`}
                onClick={toggleDropdown}
              >
                브랜드
                <span className="arrow">
                  <Arrow />
                </span>
              </button>
              <div className="checkbox_container">
                {isActive &&
                  checkData.length > 0 &&
                  checkData.map((value) => {
                    return (
                      <div className="checkbox_content" key={value.brandName}>
                        <label>
                          <input
                            className="checkbox"
                            type="checkbox"
                            value={value.brandName}
                            onChange={(e) => checkCondition(e)}
                            checked={value.checked}
                          />
                          {value.brandName}
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <table className="vehiclelist-table">
            <tr>
              <th>상품명</th>
            </tr>
            {garmentList && garmentList.length > 0 ? (
              garmentList.map((value) => {
                return (
                  <tr>
                    <td className="text-center">{value.garment_name}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="text-center">데이터가 없습니다.</td>
              </tr>
            )}
          </table>
        </section>
      </main>
    </>
  );
}
