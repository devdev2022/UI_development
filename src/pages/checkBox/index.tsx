import { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";

import Header from "components/mainHeader";
//Data
import menuList from "../../mockData/checkBox_menuList.json";

export default function CheckBox() {
  const [bizMenuData, setBizMenuData]: any = useState([]);
  const [bizMenuWholeChecked, setBizMenuWholeChecked] = useState(false);

  useEffect(() => {
    if (menuList.length > 0) {
      let bizcarMenuArray: any = [];
      menuList
        ?.filter((filterV: any) => {
          return !filterV.menu_name.includes("라이트");
        })
        ?.forEach((value: any) => {
          if (
            bizcarMenuArray.some((businessArrayValue: any) => {
              return businessArrayValue.menuName === value.menu_name;
            })
          ) {
            let index = bizcarMenuArray.findIndex((findValue: any) => {
              return findValue.menuName === value.menu_name;
            });

            bizcarMenuArray[index].data.push({ ...value, checked: false });
          } else {
            bizcarMenuArray.push({
              menuName: value.menu_name,
              allChecked: false,
              data: [{ ...value, checked: false }],
            });
          }
        });

      setBizMenuData(bizcarMenuArray);
    }
  }, [menuList]);

  useEffect(() => {
    if (
      bizMenuData.length !== 0 &&
      bizMenuData.every((value: any) => {
        return value.data.every((item: any) => item.checked === true);
      })
    ) {
      setBizMenuWholeChecked(true);
    } else setBizMenuWholeChecked(false);
  }, [bizMenuData]);

  //모든 메뉴 선택
  const wholeCheckBizMenus = (reset?: boolean) => {
    if (reset) {
      const updatedData = bizMenuData.map((bizValue: any) => {
        const updatedBizData = bizValue.data.map((subMenuValue: any) => {
          return {
            ...subMenuValue,
            checked: false,
          };
        });

        return {
          ...bizValue,
          data: updatedBizData,
          allChecked: false,
        };
      });

      setBizMenuData(updatedData);
    } else {
      const isAllChecked = bizMenuData.every((bizValue: any) =>
        bizValue.data.every((subMenuValue: any) => subMenuValue.checked)
      );

      const updatedData = bizMenuData.map((bizValue: any) => {
        const updatedBizData = bizValue.data.map((subMenuValue: any) => {
          return {
            ...subMenuValue,
            checked: !isAllChecked,
          };
        });

        return {
          ...bizValue,
          data: updatedBizData,
          allChecked: !isAllChecked,
        };
      });

      setBizMenuData(updatedData);
    }
  };

  //메뉴 개별선택
  const bizMenuCheckHandler = (index1: number, index2?: number) => {
    if (index1 !== undefined && index2 !== undefined) {
      let newData = [...bizMenuData];

      newData[index1].data[index2].checked =
        !newData[index1].data[index2].checked;

      if (newData[index1].data[index2].checked === false) {
        newData[index1].allChecked = false;
      }

      if (
        newData[index1].data.filter((value: any) => {
          return value.checked === false;
        }).length <= 0
      ) {
        newData[index1].allChecked = true;
      }
      setBizMenuData(newData);
    } else if (index1 !== undefined) {
      let newData = [...bizMenuData];

      newData[index1].allChecked = !newData[index1].allChecked;

      let newArray = newData[index1].data.map((value: any) => {
        return { ...value, checked: newData[index1].allChecked };
      });

      newData[index1].data = newArray;

      setBizMenuData(newData);
    }
  };

  return (
    <>
      <Header linkText={"홈으로"} />
      <section className="table-content">
        <Table className="tbl-detail">
          <colgroup>
            <col width="15%" />
            <col />
          </colgroup>
          <tbody>
            <div className="allChecked-area">
              <Form.Check
                readOnly
                inline
                label="전체선택"
                type="checkbox"
                name="menuName_All"
                id="menuName_AllTtile"
                checked={bizMenuWholeChecked}
                onChange={() => setBizMenuWholeChecked(!bizMenuWholeChecked)}
                onClick={() => {
                  wholeCheckBizMenus(false);
                }}
              />
            </div>
            <ul className="menu-list-area">
              {bizMenuData?.map((value: any, index: any) => {
                return (
                  <li>
                    <strong>
                      <Form.Check
                        readOnly
                        inline
                        label={value.menuName}
                        type="checkbox"
                        checked={value.allChecked}
                        onClick={() => {
                          bizMenuCheckHandler(index);
                        }}
                      />
                    </strong>
                    <span>
                      {value.data.map((dataValue: any, dataIndex: any) => {
                        return (
                          <Form.Check
                            readOnly
                            key={dataValue.menu_sub_name + String(dataIndex)}
                            inline
                            label={dataValue?.menu_sub_name}
                            type="checkbox"
                            checked={dataValue.checked}
                            onClick={() => {
                              bizMenuCheckHandler(index, dataIndex);
                            }}
                          />
                        );
                      })}
                    </span>
                  </li>
                );
              })}
            </ul>
          </tbody>
        </Table>
      </section>
    </>
  );
}
