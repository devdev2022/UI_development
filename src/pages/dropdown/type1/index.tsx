import { useEffect, useState } from "react";
import Header from "components/mainHeader";
import dropDownData from "../../../mockData/dropDown.json";

export default function Type1() {
  const [searchBrand, setSearchBrand] = useState<string | null>(null);
  const [searchGarmetType, setSearchGarmetType] = useState<string | null>(null);
  const [garmentTypeList, setGarmentTypeList] = useState([]);
  const [garmentList, setGarmentList] = useState([]);

  const onChangeSearchBrand = (selected: any) => {
    if (selected) {
      if (selected.target.value == "") {
        setSearchBrand(null);
        setSearchGarmetType(null);
        setGarmentTypeList(null);
      } else {
        setSearchBrand(selected.target.value);
        setSearchGarmetType(null);
        const filteredTypeList = [
          ...new Set(
            dropDownData.data
              .filter((value) => value.business_name === selected.target.value)
              .map((item) => item.garment_type.trim())
          ),
        ];

        setGarmentTypeList(filteredTypeList);

        const filteredGarmentList = [
          ...new Set(
            dropDownData.data.filter(
              (value) => value.business_name === selected.target.value
            )
          ),
        ];
        setGarmentList(filteredGarmentList);
      }
    }
  };

  const onChangeSearchGarmentType = (selected: any) => {
    setSearchGarmetType(selected.target.value || null);

    const filteredGarmentList = [
      ...new Set(
        dropDownData.data
          .filter((value) => value.business_name === searchBrand)
          .filter((value2) => value2.garment_type === selected.target.value)
      ),
    ];
    setGarmentList(filteredGarmentList);
  };

  return (
    <>
      <Header linkText={"홈으로"} />
      <main className="container">
        <section className="dropdown-layout">
          <div className="box_select">
            <select
              title="브랜드명"
              onChange={onChangeSearchBrand}
              className="select"
              value={searchBrand ? searchBrand : "브랜드명"}
            >
              <option value="">브랜드명</option>
              {dropDownData.data && dropDownData.data.length > 0
                ? [
                    ...new Set(
                      dropDownData.data.map((item) => item.business_name)
                    ),
                  ].map((d: any, i: number) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))
                : ""}
            </select>
            <select
              title="분류"
              onChange={onChangeSearchGarmentType}
              className="select"
              value={searchGarmetType ? searchGarmetType : "분류"}
            >
              <option value="">분류</option>
              {searchBrand && garmentTypeList && garmentTypeList.length > 0
                ? garmentTypeList.map((d: any, i: number) => (
                    <option value={d} key={d}>
                      {d}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          <table className="vehiclelist-table">
            <tr>
              <th>상품명</th>
            </tr>
            {garmentList && garmentList.length > 0 ? (
              garmentList.map((value) => {
                return (
                  <tr key={value.garment_name}>
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
