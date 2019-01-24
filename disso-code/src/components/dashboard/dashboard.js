import React, { Component } from 'react';
import $ from 'jquery';

class Dashboard extends Component {
    componentDidMount() {
        $().ready(function() {
            window.demo.initChartist();
        });
    }

    render() {
        return (
            <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="header">
                      <h4 className="title">Email Statistics</h4>
                      <p className="category">Last Campaign Performance</p>
                    </div>
                    <div className="content">
                      <div id="chartPreferences" className="ct-chart ct-perfect-fourth" />
                      <div className="footer">
                        <div className="legend">
                          <i className="fa fa-circle text-info" /> Open
                          <i className="fa fa-circle text-danger" /> Bounce
                          <i className="fa fa-circle text-warning" /> Unsubscribe
                        </div>
                        <hr />
                        <div className="stats">
                          <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card">
                    <div className="header">
                      <h4 className="title">Users Behavior</h4>
                      <p className="category">24 Hours performance</p>
                    </div>
                    <div className="content">
                      <div id="chartHours" className="ct-chart" />
                      <div className="footer">
                        <div className="legend">
                          <i className="fa fa-circle text-info" /> Open
                          <i className="fa fa-circle text-danger" /> Click
                          <i className="fa fa-circle text-warning" /> Click Second Time
                        </div>
                        <hr />
                        <div className="stats">
                          <i className="fa fa-history" /> Updated 3 minutes ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card ">
                    <div className="header">
                      <h4 className="title">2014 Sales</h4>
                      <p className="category">All products including Taxes</p>
                    </div>
                    <div className="content">
                      <div id="chartActivity" className="ct-chart" />
                      <div className="footer">
                        <div className="legend">
                          <i className="fa fa-circle text-info" /> Tesla Model S
                          <i className="fa fa-circle text-danger" /> BMW 5 Series
                        </div>
                        <hr />
                        <div className="stats">
                          <i className="fa fa-check" /> Data information certified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card ">
                    <div className="header">
                      <h4 className="title">Tasks</h4>
                      <p className="category">Backend development</p>
                    </div>
                    <div className="content">
                      <div className="table-full-width">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <label className="checkbox">
                                  <input type="checkbox" defaultValue data-toggle="checkbox" />
                                </label>
                              </td>
                              <td>Sign contract for "What are conference organizers afraid of?"</td>
                              <td className="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                  <i className="fa fa-edit" />
                                </button>
                                <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                  <i className="fa fa-times" />
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="checkbox">
                                  <input type="checkbox" defaultValue data-toggle="checkbox" defaultChecked />
                                </label>
                              </td>
                              <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                              <td className="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                  <i className="fa fa-edit" />
                                </button>
                                <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                  <i className="fa fa-times" />
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="checkbox">
                                  <input type="checkbox" defaultValue data-toggle="checkbox" defaultChecked />
                                </label>
                              </td>
                              <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                              </td>
                              <td className="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                  <i className="fa fa-edit" />
                                </button>
                                <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                  <i className="fa fa-times" />
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="checkbox">
                                  <input type="checkbox" defaultValue data-toggle="checkbox" />
                                </label>
                              </td>
                              <td>Create 4 Invisible User Experiences you Never Knew About</td>
                              <td className="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                  <i className="fa fa-edit" />
                                </button>
                                <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                  <i className="fa fa-times" />
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="checkbox">
                                  <input type="checkbox" defaultValue data-toggle="checkbox" />
                                </label>
                              </td>
                              <td>Read "Following makes Medium better"</td>
                              <td className="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                  <i className="fa fa-edit" />
                                </button>
                                <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                  <i className="fa fa-times" />
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="checkbox">
                                  <input type="checkbox" defaultValue data-toggle="checkbox" />
                                </label>
                              </td>
                              <td>Unfollow 5 enemies from twitter</td>
                              <td className="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                  <i className="fa fa-edit" />
                                </button>
                                <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                  <i className="fa fa-times" />
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="footer">
                        <hr />
                        <div className="stats">
                          <i className="fa fa-history" /> Updated 3 minutes ago
                        </div>
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

export default Dashboard;
