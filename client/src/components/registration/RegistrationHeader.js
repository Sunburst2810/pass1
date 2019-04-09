import React, { Component } from "react";

class RegistrationHeader extends Component {
  render() {
    const { registration } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="text-center">
                  <strong>Geology &amp; Mining Department </strong>
                </h3>
                <h3 className="text-center">
                  <strong>
                    {" "}
                    Directorate Of Geology &amp; Mining Uttar Pradesh{" "}
                  </strong>
                </h3>
                <h3 className="text-center">
                  <strong>
                    {" "}
                    Uttar Pradesh Minor Mineral Concession Rules 1963{" "}
                  </strong>
                </h3>
                <h3 className="text-center">
                  {" "}
                  e-Transit Pass Form <br /> For Transportation &amp; Minor
                  Mineral from Stock See Rule 70(1)
                </h3>
                <h4 className="text-center"> Form MM11 </h4>
              </div>
              <div className="panel-body">
                <div className="col-md-12 table-responsive">
                  <div className="col-md-12  text-center">
                    This eMM11 is valid up to :
                    <span>{registration.emm11validupto}</span>
                  </div>

                  <div className="col-md-12  text-center">
                    Current Date&amp;Time
                    <span />
                  </div>

                  <div className="col-md-12  text-center" />
                  <div className="col-md-12  text-left">
                    <h3>
                      {" "}
                      Lease Details &amp; Mineral QTY to be Transported:-
                    </h3>
                  </div>
                  <div className="col-md-12  text-center" />
                  <div className="col-md-3 text-left">
                    <strong>
                      {" "}
                      <label>1.eMM11:-:</label>
                    </strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.eMM11}</span>
                  </div>

                  <div className="col-md-3 text-left">
                    <strong>
                      <label>2.NAME OF LESSEE / PERMIT HOLDER</label>
                    </strong>
                  </div>

                  <div className="col-md-3 text-left">
                    <span>{registration.nameofleasee}</span>
                  </div>
                </div>

                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                    <strong><label>3. Mobile Number: </label></strong>
                  </div>

                  <div className="col-md-3 text-left">
                    <span> {registration.mobilenoleasee}</span>
                  </div>

                  <div className="col-md-3 text-left">
                   <strong> <label>4. Tin Number:-</label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.tinno}</span>
                  </div>
                </div>
                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                    <strong><label>5. Lessee Id: </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.leaseeid}</span>
                  </div>

                  <div className="col-md-3 text-left">
                    <label>
                     <strong> 6.LEASE DETAILS [ADDRESS,VILLAGE,(GATA/KHAND),AREA]:</strong>
                    </label>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.leaseedetails}</span>
                  </div>
                </div>
                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                    <strong><label>7.Tehsil OF LEASE </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.tehsilofleasee}</span>
                  </div>
                  <div className="col-md-3 text-left">
                   <strong> <label>8.DISTRICT OF LEASE</label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.districtofleasee}</span>
                  </div>
                </div>

                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                    <strong><label>9.Lease Address: </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span id="lbl_lease_address" />
                  </div>
                  <div className="col-md-3 text-left">
                   <strong> <label>
                      10.QTY Transported in (Cubic Meter/Ton for Silica
                    sand) :
                    </label></strong>{" "}
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.quantitytransportqmeter}</span>
                  </div>
                </div>
                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                    <strong><label>11.Name Of Mineral:</label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.nameofmineral}</span>
                  </div>
                  <div className="col-md-3 text-left">
                    <strong><label>Destination District </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.destination}</span>
                  </div>
                </div>

                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                   <strong> <label>12.Loading From: </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.loadingfrom}</span>
                  </div>

                  <div className="col-md-3 text-left">
                    <strong><label>13.Destination (Delivery Address): </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.destination}</span>
                  </div>
                </div>

                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                    <strong><label>14.Distance(Approx): </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.distance}</span> K.M.
                  </div>
                  <div className="col-md-3 text-left">
                    <strong><label>15.eMM11 Generated On: </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.etpgeneratedon}</span>
                  </div>
                </div>

                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                    <strong><label>16.eMM11 Valid Upto: </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.emm11valipupto}</span>
                  </div>

                  <div className="col-md-3 text-left">
                   <strong> <label>17.Traveling Duration (Approx):</label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.travelingduration} Hr (Approx)</span>
                  </div>
                </div>

                <div className="col-md-12  text-center" />
                <div className="col-md-12  text-left">
                  <h3>Details Of Registered Vehicle:-</h3>
                </div>
                <div className="col-md-12  text-center" />
                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                   <strong> <label>1. Registration Number Of Vehicle:</label></strong>{" "}
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.registrationno}</span>
                  </div>
                  <div className="col-md-3 text-left">
                   <strong> <label>2. Name Of Driver : </label></strong>{" "}
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.nameofdriver}</span>
                  </div>
                </div>

                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                   <strong> <label>3. Mobile Number Of Driver:</label></strong>{" "}
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.mobilenodriver}</span>
                  </div>
                  <div className="col-md-3 text-left">
                    <strong><label>4. Type Of Vehicle: </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.typeofvehicle}</span>
                  </div>
                </div>

                <div className="col-md-12 table-responsive">
                  <div className="col-md-3 text-left">
                   <strong> <label>5. DL Number: </label></strong>
                  </div>
                  <div className="col-md-3 text-left">
                    <span>{registration.dlnodriver}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationHeader;
