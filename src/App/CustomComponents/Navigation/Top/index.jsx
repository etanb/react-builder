const React = require("react");
let Router = require('react-router');
let Link = Router.Link;

export default class NavTop extends React.Component {
  render() {

    const SearchInput = <div className="sds-form--vertical">
      <div className="sds-form-element">
        {/*<label className="form-element__label" for="text-input"/>*/}
        <div className="sds-form-element__control">
          <input id="text-input" className="sds-input" type="text" aria-label="text-input" placeholder="Search Salesforce" label="Text Input" />
        </div>
      </div>
    </div>;

    const AppLauncherIcon = <div className="icons-rachel throb">
      <svg className="svg-rachel-throb" version="1.1" id="apps4" x="0px" y="0px" viewBox="-405 207 148 148"
         enable-background="new -405 207 148 148">
      <path className="r9" fill="currentColor" d="M-295,315h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-297,315.9-296.1,315-295,315z"/>
      <path className="r8" fill="currentColor" d="M-349,315h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-351,315.9-350.1,315-349,315z"/>
      <path className="r7" fill="currentColor" d="M-403,315h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-405,315.9-404.1,315-403,315z"/>
      <path className="r6" fill="currentColor" d="M-295,261h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-297,261.9-296.1,261-295,261z"/>
      <path className="r5" fill="currentColor" d="M-349,261h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-351,261.9-350.1,261-349,261z"/>
      <path className="r4" fill="currentColor" d="M-403,261h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-405,261.9-404.1,261-403,261z"/>
      <path className="r3" fill="currentColor" d="M-295,207h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-297,207.9-296.1,207-295,207z"/>
      <path className="r2" fill="currentColor" d="M-349,207h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-351,207.9-350.1,207-349,207z"/>
      <path className="r1" fill="currentColor" d="M-403,207h36c1.1,0,2,0.9,2,2v36c0,1.1-0.9,2-2,2h-36c-1.1,0-2-0.9-2-2v-36
        C-405,207.9-404.1,207-403,207z"/>
      </svg>
    </div>;

    return(
      <div className="p200-nav-top">
        <div className="sds-grid">
          <div className="sds-col">
            <div className="sds-grid sds-grid--align-center">
              {SearchInput}
            </div>
          </div>
          
          {/*<div className="col">
                <div className="right-align-this">
                  {AppLauncherIcon}
                  <Link to="/" className="fake-link">
                    <svg aria-hidden="true" className="icon-nav-top icon--medium icon-utility-question" dangerouslySetInnerHTML={{__html: '<use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#question"></use>'}}/>
                  </Link>
                  <Link to="/" className="fake-link">
                    <svg aria-hidden="true" className="icon-nav-top icon--medium icon-utility-settings" dangerouslySetInnerHTML={{__html: '<use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#settings"></use>'}}/>
                  </Link>
                  <Link to="/" className="fake-link">
                    <svg aria-hidden="true" className="icon-nav-top icon--medium icon-utility-notification" dangerouslySetInnerHTML={{__html: '<use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#notification"></use>'}}/>
                  </Link>
                  <Link to="/" className="fake-link">
                    <svg aria-hidden="true" className="icon-nav-top-avatar icon--medium icon-standard-avatar" dangerouslySetInnerHTML={{__html: '<use xlink:href="assets/icons/standard-sprite/svg/symbols.svg#avatar"></use>'}}/>
                  </Link>
                </div>
              </div>*/}

        </div>
      </div>
    )
  }
};