import { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import Header from "components/mainHeader";

//데이터

//이미지
import { ReactComponent as IconPlusWhite } from "../../assets/icon_plus_white.svg";
import { ReactComponent as IconTrash } from "../../assets/icon_trash.svg";

export default function FieldAddition() {
  const [studentInf, setStudentInf]: any = useState([
    {
      businessPlaceName: null,
      isActive: "T",
      parkPlaceAddress: null,
      managerDept: null,
      managerName: null,
      parkingManagerPhoneNumber: null,
      employeeEmail: null,
      longitude: null,
      latitude: null,
    },
  ]);

  return (
    <>
      <Header linkText={"홈으로"} />
      <section className="field-content">
        <div className="field-inner">
          <div className="table-etc-area">
            <div className="etc-top-area">
              <button
                className="add-student"
                onClick={() => {
                  setStudentInf(
                    studentInf.concat({
                      businessPlaceName: null,
                      isActive: "T",
                      parkPlaceAddress: null,
                      managerDept: null,
                      managerName: null,
                      parkingManagerPhoneNumber: null,
                      employeeEmail: null,
                      longitude: null,
                      latitude: null,
                    })
                  );
                }}
              >
                <IconPlusWhite />
                학생 추가
              </button>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            {studentInf?.map((value: any, index: any) => {
              return (
                <Table className="tbl-detail">
                  <colgroup>
                    <col width="15%" />
                    <col />
                    <col width="15%" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        이름<span className="mark-asterisk">*</span>
                      </th>
                      <td>
                        <Form.Control
                          className={`me-auto`}
                          type="text"
                          placeholder="이름을 입력하세요"
                          value={value.businessPlaceName || ""}
                          onChange={(e) => {
                            let newArray = [...studentInf];

                            newArray[index].businessPlaceName = e.target.value;

                            setStudentInf(newArray);
                          }}
                        />
                      </td>
                      <th>
                        주소<span className="mark-asterisk">*</span>
                      </th>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "4px",
                          }}
                        >
                          <Form.Control
                            className="me-auto"
                            type="text"
                            placeholder="주소를 입력하세요"
                            value={value.parkPlaceAddress || ""}
                            readOnly
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        반<span className="mark-asterisk">*</span>
                      </th>
                      <td>
                        <Form.Control
                          className={`me-auto`}
                          type="text"
                          placeholder="반을 입력하세요"
                          value={value.managerDept || ""}
                          onChange={(e) => {
                            let newArray = [...studentInf];

                            newArray[index].managerDept = e.target.value;

                            setStudentInf(newArray);
                          }}
                        />
                      </td>
                      <th>
                        휴대폰 번호
                        <span className="mark-asterisk">*</span>
                      </th>
                      <td>
                        <Form.Control
                          className={`me-auto`}
                          type="text"
                          placeholder="학생 휴대폰 번호를 입력하세요"
                          value={value.parkingManagerPhoneNumber || ""}
                          onChange={(e) => {
                            let newArray = [...studentInf];

                            newArray[index].parkingManagerPhoneNumber =
                              e.target.value;

                            setStudentInf(newArray);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        학부모 이름<span className="mark-asterisk">*</span>
                      </th>
                      <td>
                        <Form.Control
                          className={`me-auto`}
                          type="text"
                          placeholder="학부모 이름을 입력하세요"
                          value={value.managerName || ""}
                          onChange={(e) => {
                            let newArray = [...studentInf];

                            newArray[index].managerName = e.target.value;

                            setStudentInf(newArray);
                          }}
                        />
                      </td>
                      <th>
                        학부모 휴대폰 번호
                        <span className="mark-asterisk">*</span>
                      </th>
                      <td>
                        <Form.Control
                          className={`me-auto`}
                          type="text"
                          placeholder="학부모 휴대폰 번호를 입력하세요"
                          value={value.employeeEmail || ""}
                          onChange={(e) => {
                            let newArray = [...studentInf];

                            newArray[index].employeeEmail = e.target.value;

                            setStudentInf(newArray);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>삭제</th>
                      <td colSpan={3}>
                        {" "}
                        <Button
                          variant="swkit"
                          className="delete"
                          onClick={() => {
                            let newArray = studentInf.filter(
                              (value: any, filterIndex: any) => {
                                return index !== filterIndex;
                              }
                            );

                            setStudentInf(newArray);
                          }}
                        >
                          <IconTrash />
                          삭제
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
