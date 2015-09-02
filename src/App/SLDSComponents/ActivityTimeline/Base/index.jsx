import React from 'react';

export default class BASE extends React.Component{
	render(){
		return (
      <ul className="sds-timeline">
        <li className="sds-timeline__item">
          <span className="sds-assistive-text">Task</span>
          <div className="sds-media sds-media--reverse">
            <div className="sds-media__figure">
              <div className="sds-timeline__actions">
                <p className="sds-timeline__date">Feb 24</p>
                <button className="sds-button sds-button--icon-border-filled">
                  <svg aria-hidden="true" className="sds-button__icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>'}}/>
                  <span className="sds-assistive-text">Switch</span>
                </button>
              </div>
            </div>
            <div className="sds-media__body">
              <div className="sds-media sds-media--timeline sds-timeline__media--task">
                <div className="sds-media__figure">
                  <svg aria-hidden="true" className="sds-icon sds-icon--medium sds-icon-standard-task" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>'}}/>
                </div>
                <div className="sds-media__body">
                  <div className="sds-media sds-media--small">
                    <div className="sds-media__figure">
                      <label className="sds-checkbox" for="mark-complete">
                        <input type="checkbox" id="mark-complete" />
                        <span className="sds-checkbox--faux"></span>
                        <span className="sds-form-element__label sds-assistive-text">mark-complete</span>
                      </label>
                    </div>
                    <div className="sds-media__body">
                      <div className="tile">
                        <div className="sds-grid sds-wrap">
                          <div className="sds-col sds-size--1-of-1 sds-text-body--regular">
                            <p className="sds-truncate"><a href="#">Review proposals for EBC deck with larger team and have marketing review this</a></p>
                          </div>
                          <div className="sds-col sds-text-body--small">
                            <ul className="sds-list--horizontal sds-text-body--small">
                              <li className="sds-list__item sds-m-right--large">
                                <dl className="sds-dl--inline">
                                  <dt className="sds-dl--inline__label">Contact:</dt>
                                  <dd className="sds-dl--inline__detail"><a href="#">Lei Chan</a></dd>
                                </dl>
                              </li>
                              <li className="sds-list__item">
                                <dl className="sds-dl--inline">
                                  <dt className="sds-dl--inline__label">Assigned to:</dt>
                                  <dd className="sds-dl--inline__detail"><a href="#">Betty Mason</a></dd>
                                </dl>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="sds-timeline__item">
          <span className="sds-assistive-text">Event</span>
          <div className="sds-media sds-media--reverse">
            <div className="sds-media__figure">
              <div className="sds-timeline__actions">
                <p className="sds-timeline__date">Feb 24</p>
                <button className="sds-button sds-button--icon-border-filled">
                  <svg aria-hidden="true" className="sds-button__icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>'}}/>
                  <span className="sds-assistive-text">Switch</span>
                </button>
              </div>
            </div>
            <div className="sds-media__body">
              <div className="sds-media sds-media--timeline sds-timeline__media--event">
                <div className="sds-media__figure">
                  <svg aria-hidden="true" className="sds-icon sds-icon--medium sds-icon-standard-event" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>'}}/>
                </div>
                <div className="sds-media__body">
                  <p><a href="#">Company One — EBC Meeting</a></p>
                  <p className="sds-truncate">Let&#x27;s get together to review the theater&#x27;s layout and facilities. We&#x27;ll also discuss potential things that truncate at a certain width.</p>
                  <ul className="sds-list--horizontal sds-text-body--small">
                    <li className="sds-list__item sds-m-right--large">
                      <dl className="sds-dl--inline">
                        <dt className="sds-dl--inline__label">Time:</dt>
                        <dd className="sds-dl--inline__detail"><a href="#">Feb 23, 2015 11:00am - 12:00pm</a></dd>
                      </dl>
                    </li>
                    <li className="sds-list__item">
                      <dl className="sds-dl--inline">
                        <dt className="sds-dl--inline__label">Location:</dt>
                        <dd className="sds-dl--inline__detail"><a href="#">300 Pike St, San Francisco CA</a></dd>
                      </dl>
                    </li>
                  </ul>
                  <dl className="sds-dl--inline sds-text-body--small">
                    <dt className="sds-dl--inline__label">Name:</dt>
                    <dd className="sds-dl--inline__detail"><a href="#">Lei Chan</a>, <a href="#">Jason Dewar</a>, <a href="#">Gwean Jones</a> and <a href="#">Pete Schaffer</a></dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="sds-timeline__item">
          <span className="sds-assistive-text">Call</span>
          <div className="sds-media sds-media--reverse">
            <div className="sds-media__figure">
              <div className="sds-timeline__actions">
                <p className="sds-timeline__date">Feb 24</p>
                <button className="sds-button sds-button--icon-border-filled">
                  <svg aria-hidden="true" className="sds-button__icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>'}}/>
                  <span className="sds-assistive-text">Switch</span>
                </button>
              </div>
            </div>
            <div className="sds-media__body">
              <div className="sds-media sds-media--timeline sds-timeline__media--call">
                <div className="sds-media__figure">
                  <svg aria-hidden="true" className="sds-icon sds-icon--medium sds-icon-standard-log-a-call" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#log_a_call"></use>'}}/>
                </div>
                <div className="sds-media__body">
                  <p><a href="#">Mobile conversation on Monday</a></p>
                  <p className="sds-truncate">Lei seemed interested in closing this deal quickly! Let&#x27;s move move.</p>
                  <ul className="sds-list--horizontal sds-text-body--small">
                    <li className="sds-list__item sds-m-right--large">
                      <dl className="sds-dl--inline">
                        <dt className="sds-dl--inline__label">Name:</dt>
                        <dd className="sds-dl--inline__detail"><a href="#">Lei Chan</a></dd>
                      </dl>
                    </li>
                    <li className="sds-list__item">
                      <dl className="sds-dl--inline">
                        <dt className="sds-dl--inline__label">Assigned to:</dt>
                        <dd className="sds-dl--inline__detail"><a href="#">Betty Mason</a></dd>
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="sds-timeline__item">
          <span className="sds-assistive-text">Email</span>
          <div className="sds-media sds-media--reverse">
            <div className="sds-media__figure">
              <div className="sds-timeline__actions">
                <p className="sds-timeline__date">Feb 24</p>
                <button className="sds-button sds-button--icon-border-filled">
                  <svg aria-hidden="true" className="sds-button__icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>'}}/>
                  <span className="sds-assistive-text">Switch</span>
                </button>
              </div>
            </div>
            <div className="sds-media__body">
              <div className="sds-media sds-media--timeline sds-timeline__media--email">
                <div className="sds-media__figure">
                  <svg aria-hidden="true" className="sds-icon sds-icon--medium sds-icon-standard-email" dangerouslySetInnerHTML={{__html: '<use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#email"></use>'}}/>
                </div>
                <div className="sds-media__body">
                  <div className="tile">
                    <div className="sds-grid sds-wrap">
                      <div className="sds-col sds-size--1-of-1 sds-text-body--regular">
                        <p className="sds-truncate"><a href="#">Updated Proposals</a></p>
                      </div>
                    </div>
                  </div>
                  <p className="sds-truncate">Hi guys, Thanks for meeting with the team today and going through the proposals we saw. This goes on until it&#x27;s truncated.</p>
                  <ul className="sds-list--horizontal sds-text-body--small">
                    <li className="sds-list__item sds-m-right--large">
                      <dl className="sds-dl--inline">
                        <dt className="sds-dl--inline__label">To:</dt>
                        <dd className="sds-dl--inline__detail"><a href="#">Lei Chan</a></dd>
                      </dl>
                    </li>
                    <li className="sds-list__item">
                      <dl className="sds-dl--inline">
                        <dt className="sds-dl--inline__label">From:</dt>
                        <dd className="sds-dl--inline__detail"><a href="#">Jason Dewar</a></dd>
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    )
	}
}