import React from 'react';
import ReactDOM from 'react-dom';

class Membership extends React.Component {
    render() {
        return <div className="container">
            <div className="row">


                <div className="col-lg-12">

                    <header class="pricing-table-header">
                        <div class="container">

                            <h1 class="text-center pricing-table-title">Membership Plans </h1>
                            <div class="list-group list-group-horizontal pricing-plans-tab" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="monthly-plans-tab" data-toggle="list" href="https://www.bootstrapdash.com/demo/ui-components/pricing/pricing-2/#monthly-plans" role="tab" aria-controls="monthly-plans" aria-selected="true">Monthly Plans</a>
                                <a class="list-group-item list-group-item-action" id="annual-plans-tab" data-toggle="list" href="https://www.bootstrapdash.com/demo/ui-components/pricing/pricing-2/#annual-plans" role="tab" aria-controls="annual-plans" aria-selected="false">Annual Plans</a>
                            </div>

                        </div>
                    </header>
                    <div class="container">

                        <div class="tab-content pricing-tab-content" id="pills-tabContent">
                            <div class="tab-pane show active" id="monthly-plans" role="tabpanel" aria-labelledby="monthly-plans-tab">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="card pricing-card text-center shadow border-0">
                                            <div class="card-header">
                                                <h5 class="pricing-plan-title">Basic</h5>
                                                <h3 class="pricing-plan-cost">INR 700.00/Month</h3>
                                            </div>
                                            <div class="card-body">
                                                <ul class="pricing-plan-features">
                                                    <li>Annual Plan fee</li>
                                                    <li>Monthly plan fee</li>
                                                    <li>Seat Minimum</li>
                                                    <li>Phone support</li>
                                                    <li>Group messaging</li>
                                                    <li>Chat</li>
                                                </ul>
                                                <a href="https://www.bootstrapdash.com/demo/ui-components/pricing/pricing-2/#!" class="btn btn-success pricing-plan-purchase-btn">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card pricing-card text-center shadow border-0">
                                            <div class="card-header">
                                                <h5 class="pricing-plan-title">Business</h5>
                                                <h3 class="pricing-plan-cost">INR 4900.00/Month</h3>
                                            </div>
                                            <div class="card-body">
                                                <ul class="pricing-plan-features">
                                                    <li>Annual Plan fee</li>
                                                    <li>Monthly plan fee</li>
                                                    <li>Seat Minimum</li>
                                                    <li>Phone support</li>
                                                    <li>Group messaging</li>
                                                    <li>Chat</li>
                                                </ul>
                                                <a href="https://www.bootstrapdash.com/demo/ui-components/pricing/pricing-2/#!" class="btn btn-success pricing-plan-purchase-btn">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card pricing-card text-center shadow border-0">
                                            <div class="card-header">
                                                <h5 class="pricing-plan-title">Enterprise</h5>
                                                <h3 class="pricing-plan-cost">INR 9900.00/Month</h3>
                                            </div>
                                            <div class="card-body">
                                                <ul class="pricing-plan-features">
                                                    <li>Annual Plan fee</li>
                                                    <li>Monthly plan fee</li>
                                                    <li>Seat Minimum</li>
                                                    <li>Phone support</li>
                                                    <li>Group messaging</li>
                                                    <li>Chat</li>
                                                </ul>
                                                <a href="https://www.bootstrapdash.com/demo/ui-components/pricing/pricing-2/#!" class="btn btn-success pricing-plan-purchase-btn">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="annual-plans" role="tabpanel" aria-labelledby="annual-plans-tab">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="card pricing-card text-center shadow border-0">
                                            <div class="card-header">
                                                <h5 class="pricing-plan-title">Basic</h5>
                                                <h3 class="pricing-plan-cost">INR 680.00/Year</h3>
                                            </div>
                                            <div class="card-body">
                                                <ul class="pricing-plan-features">
                                                    <li>Annual Plan fee</li>
                                                    <li>Monthly plan fee</li>
                                                    <li>Seat Minimum</li>
                                                    <li>Phone support</li>
                                                    <li>Group messaging</li>
                                                    <li>Chat</li>
                                                </ul>
                                                <a href="https://www.bootstrapdash.com/demo/ui-components/pricing/pricing-2/#!" class="btn btn-success pricing-plan-purchase-btn">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card pricing-card text-center shadow border-0">
                                            <div class="card-header">
                                                <h5 class="pricing-plan-title">Business</h5>
                                                <h3 class="pricing-plan-cost">INR 4900.00/Year</h3>
                                            </div>
                                            <div class="card-body">
                                                <ul class="pricing-plan-features">
                                                    <li>Annual Plan fee</li>
                                                    <li>Monthly plan fee</li>
                                                    <li>Seat Minimum</li>
                                                    <li>Phone support</li>
                                                    <li>Group messaging</li>
                                                    <li>Chat</li>
                                                </ul>
                                                <a href="https://www.bootstrapdash.com/demo/ui-components/pricing/pricing-2/#!" class="btn btn-success pricing-plan-purchase-btn">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card pricing-card text-center shadow border-0">
                                            <div class="card-header">
                                                <h5 class="pricing-plan-title">Enterprise</h5>
                                                <h3 class="pricing-plan-cost">INR 9900.00/Year</h3>
                                            </div>
                                            <div class="card-body">
                                                <ul class="pricing-plan-features">
                                                    <li>Annual Plan fee</li>
                                                    <li>Monthly plan fee</li>
                                                    <li>Seat Minimum</li>
                                                    <li>Phone support</li>
                                                    <li>Group messaging</li>
                                                    <li>Chat</li>
                                                </ul>
                                                <a href="https://www.bootstrapdash.com/demo/ui-components/pricing/pricing-2/#!" class="btn btn-success pricing-plan-purchase-btn">Choose Plan</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

















                </div>

            </div>
        </div >;
    }
}

export default Membership;