import React from 'react';
import SVGIcon from '../../site/SVGIcon';
import ToggleExample from './ToggleExample';
import Button from '../../sds/Button/index.react';

export default class MotionAndAnimation extends React.Component{
  render(){
    return <div className="site-mass">
      <div className="container--medium container--center text-longform">
        <p className="text-introduction">
          Motion and animation add personality and meaning to components.
          The basic building blocks are tokens for timing and elevation.
        </p>
        <p>
          The following are our recommendations for adding motion and
          animation to your user interfaces. The interactive examples demonstrate
          what is possible with CSS and JavaScript.
        </p>
      </div>

      <section className="site-grid--landing">
        <ul className="grid wrap">
          <li className="col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-4">
            <a href="/motion-and-animation/principles">
              <figure>
                <img src="/assets/images/motion/ruler_icon.svg" className="icon-standard-article icon--large icon--circle" />
                <figcaption>Principles</figcaption>
              </figure>
            </a>
          </li>
          <li className="col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-4">
            <a href="/motion-and-animation/vocabulary">
              <figure>
                <SVGIcon sprite="standard" symbol="canvas" className="icon icon-standard-canvas icon__svg icon--large icon--circle" />
                <figcaption>Vocabulary</figcaption>
              </figure>
            </a>
          </li>
          <li className="col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-4">
            <a href="/motion-and-animation/animation">
              <figure>
                <img src="/assets/images/motion/ball_bounce.svg" className="icon-custom-1 icon--large icon--circle" />
                <figcaption>Animation</figcaption>
              </figure>
            </a>
          </li>
          <li className="col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-4">
            <a href="/motion-and-animation/examples">
              <figure>
                <SVGIcon sprite="custom" symbol="custom88" className="icon icon-custom-19 icon__svg icon--large icon--circle" />
                <figcaption>Examples</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </section>

      <hr />

      <h1>Principles</h1>

      <section className="site-mass__section">
        <h2 className="text-heading--large">Key Principles</h2>
        <ul className="grid wrap">
          <li className="site-mass__featured-item col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-4">
            <div className="site-mass__centered-figure">
              <img src="/assets/images/motion/mass_icon_timing.png" alt="Timing icon" />
            </div>

            <h3 className="text-heading--medium">Timing</h3>
            <p>
              A "grid of time" creates consistent rhythm. Animation is defined as multiples of a base grid.
            </p>
          </li>
          <li className="site-mass__featured-item col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-4">
            <div className="site-mass__centered-figure">
              <img src="/assets/images/motion/mass_icon_elevation.png" alt="Elevation icon" />
            </div>

            <h3 className="text-heading--medium">Elevation</h3>
            <p>
              Utilizing the Z-axis to support spatial organization aids in creating a visual hierarchy we refer to as "atmosphere".
            </p>
          </li>
          <li className="site-mass__featured-item col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-4">
            <div className="site-mass__centered-figure">
              <img src="/assets/images/motion/mass_icon_effects.png" alt="Effects icon" />
            </div>

            <h3 className="text-heading--medium">Effects</h3>
            <p>
              Attributes are animated over time to create a vocabulary of effects.
            </p>
          </li>
        </ul>
      </section>

      <section className="site-mass__section--shaded">
        <h2 className="text-heading--large">Types of Animation</h2>
        <ul className="grid wrap">
          <li className="site-mass__featured-item col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-5">
            <div className="site-mass__centered-figure">
              <img src="/assets/images/motion/mass_icon_enter_and_exit.png" alt="Enter and exit icon" />
            </div>

            <h3 className="text-heading--small">Enter & Exit</h3>
            <p>
              The appearance or disappearance of an object on the screen.
            </p>
          </li>
          <li className="site-mass__featured-item col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-5">
            <div className="site-mass__centered-figure">
              <img src="/assets/images/motion/mass_icon_emphasis.png" alt="Emphasis icon" />
            </div>

            <h3 className="text-heading--small">Emphasis</h3>
            <p>
              Drawing attention to an object that is already on the screen.
            </p>
          </li>
          <li className="site-mass__featured-item col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-5">
            <div className="site-mass__centered-figure">
              <img src="/assets/images/motion/mass_icon_transitional_and_navigational.png" alt="Transitional and navigation icon" />
            </div>

            <h3 className="text-heading--small">Transitional & Navigational</h3>
            <p>
              Informing the user that a context change is taking place.
            </p>
          </li>
          <li className="site-mass__featured-item col--padded size--1-of-1 small-size--1-of-2 large-size--1-of-5">
            <div className="site-mass__centered-figure">
              <img src="/assets/images/motion/mass_icon_personality_and_brand.png" alt="Personality and brand icon" />
            </div>

            <h3 className="text-heading--small">Personality & Brand</h3>
            <p>
              Characteristics or sequences of engaging animation that create surprise and delight.
            </p>
          </li>
        </ul>
      </section>

      <section className="site-mass__section grid wrap">
        <div className="col--padded size--1-of-1 large-size--1-of-2 text-longform m-bottom--small">
          <h2 className="text-heading--large">Physical Mass</h2>
          <p>
            Objects in the physical world have mass, thus they speed up from a
            standstill and slow down to a stop. When choose easing:
          </p>
          <ul>
            <li>use <strong>ease-in-out</strong> for moving point to point</li>
            <li>use <strong>ease-out</strong> for entering elements</li>
            <li>use <strong>ease-in</strong> for exiting elements</li>
            <li>use <strong>linear</strong> for opacity or color changes</li>
          </ul>
        </div>
        <div className="col--padded size--1-of-1 large-size--1-of-2 text-longform m-bottom--small">
          <h2 className="text-heading--large">Other Considerations</h2>
          <p>
            The object being moved or animated should abide by these guiding principles:
          </p>
          <ul>
            <li><strong>flashing</strong> can cause medical conditions&mdash;avoid between 2 Hz - 55 Hz (NOTE: translate to ms)</li>
            <li><strong>subtle motion</strong> is preferred</li>
            <li><strong>short timing</strong> makes the interface brisk</li>
          </ul>
        </div>
      </section>

      <hr />

      <h1>Vocabulary</h1>

          <section className="site-mass__section text-longform size--1-of-1">
      <h2 className="text-heading--large">Elevation</h2>

      <div className="grid wrap">
        <div className="col size--1-of-1 large-size--1-of-2">
          <p>
            Elevation suggests a conceptual hierarchy that makes use of box shadows
            to indicate visual hierarchy. The actual Z-index is up to the developer
            to maintain the correct shadows.
          </p>
          <p>
            Atmosphere is the virtual space in front and behind the screen. The plane
            of the screen has an X,Y coordinate system with <code>0,0</code> in the top left.
            However, the Z elevation is the imaginary normal pointed at the user, -Z
            descent is beyond the plane of the screen.
          </p>
          <p>
            <em>
              Note: the Z axis is not the same as the CSS Z-index (which is
              a DOM element stacking order). The Z-indexes should be set as
              to maintain the sense of Z being towards the user.
            </em>
          </p>
          <p>
            The elevation of an object in the atmosphere is visually rendered as
            box shadows. The
            amount of elevation is <em>not</em> the same as the Z-index, rather
            its relative elevation which aids in rendering the shadow.
          </p>
        </div>
        <div className="col size--1-of-1 large-size--1-of-2">
          <div className="p-left--large centered p-top--large">
            <img src="/assets/images/motion/mass_user_screen.svg" alt="User sitting in front of screen" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="site-mass__atmosphere-graph m-top--large">
        <div className="site-mass__atmosphere-vertical-ruler" />

        <div className="site-mass__atmosphere-hline" style={{bottom: '26rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '25rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '24rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '23rem'}} />

        <div className="site-mass__atmosphere-hlabel" style={{bottom: '22rem'}}><span>15</span></div>

        <div className="site-mass__atmosphere-hline" style={{bottom: '21rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '20rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '19rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '18rem'}} />

        <div className="site-mass__atmosphere-hlabel" style={{bottom: '17rem'}}><span>10</span></div>

        <div className="site-mass__atmosphere-hline" style={{bottom: '16rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '15rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '14rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '13rem'}} />

        <div className="site-mass__atmosphere-hlabel" style={{bottom: '12rem'}}><span>5</span></div>

        <div className="site-mass__atmosphere-hline" style={{bottom: '11rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '10rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '9rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '8rem'}} />

        <div className="site-mass__atmosphere-hline site-mass__atmosphere-0-line" style={{bottom: '7rem'}} />
        <div className="site-mass__atmosphere-hlabel" style={{bottom: '7rem'}}><span>GROUND</span></div>

        <div className="site-mass__atmosphere-hline" style={{bottom: '6rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '5rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '4rem'}} />
        <div className="site-mass__atmosphere-hline" style={{bottom: '3rem'}} />

        <div className="site-mass__atmosphere-hlabel" style={{bottom: '2rem'}}><span>-5</span></div>

        <div className="site-mass__atmosphere-hline" style={{bottom: '1rem'}} />

        <Button className="site-mass__elevation-dot site-mass__elevation-dot-sunken"><span>-3</span></Button>
        <Button className="site-mass__elevation-dot site-mass__elevation-dot-grounded"><span>0</span></Button>
        <Button className="site-mass__elevation-dot site-mass__elevation-dot-raised"><span>2</span></Button>
        <Button className="site-mass__elevation-dot site-mass__elevation-dot-floating"><span>4</span></Button>
        <Button className="site-mass__elevation-dot site-mass__elevation-dot-flying"><span>16</span></Button>
      </div>
    </section>
    <section className="site-mass__section text-longform">
      To implement the shadows in code there are <a href="../../tokens/#category-atmosphere">Design Tokens</a> that you can include in the CSS <code>box-shadow</code> attribute:
    </section>
    <table className="table table--bordered table--responsive">
      <thead>
        <tr>
          <th>Elevation Name</th>
          <th>Sass Design Token</th>
          <th>Lightning Design Token</th>
          <th>Sass Example Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>flying</td>
          <td><code>$elevation-shadow-16</code></td>
          <td><code>t(elevationShadow16)</code></td>
          <td><code>box-shadow: $elevation-shadow-16;</code></td>
        </tr>
        <tr>
          <td>floating</td>
          <td><code>$elevation-shadow-4</code></td>
          <td><code>t(elevationShadow4)</code></td>
          <td><code>box-shadow: $elevation-shadow-4;</code></td>
        </tr>
        <tr>
          <td>raised</td>
          <td><code>$elevation-shadow-2</code></td>
          <td><code>t(elevationShadow2)</code></td>
          <td><code>box-shadow: $elevation-shadow-2;</code></td>
        </tr>
        <tr>
          <td>grounded</td>
          <td><code>$elevation-shadow-0</code></td>
          <td><code>t(elevationShadow0)</code></td>
          <td><code>box-shadow: $elevation-shadow-0;</code></td>
        </tr>
        <tr>
          <td>sunken</td>
          <td><code>$elevation-shadow-3-below</code></td>
          <td><code>t(elevationShadow3Below)</code></td>
          <td><code>box-shadow: $elevation-shadow-3-below;</code></td>
        </tr>
      </tbody>
    </table>

    <section className="site-mass__section text-longform size--1-of-1">
      <h2 className="text-heading--large">Timing</h2>
      <p>
        Timings are a set of duration values. Values are calculated as even
        multiples of <code>100ms</code>, which is 6 frames at 60 frames-per-second.
      </p>
    </section>
    <table className="table table--bordered table--responsive">
      <thead>
        <tr>
          <th>Sass Design Token</th>
          <th>Lightning Design Token</th>
          <th>Duration</th>
          <th>Frames at 60 FPS</th>
          <th>Frames at 30 FPS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>$duration-instantly</code></td>
          <td><code>t(durationInstantly)</code></td>
          <td>0 ms</td>
          <td>0 frames</td>
          <td>0 frames</td>
        </tr>
        <tr>
          <td><code>$duration-quickly</code></td>
          <td><code>t(durationQuickly)</code></td>
          <td>100 ms</td>
          <td>6 frames</td>
          <td>3 frames</td>
        </tr>
        <tr>
          <td><code>$duration-promptly</code></td>
          <td><code>t(durationPromptly)</code></td>
          <td>200 ms</td>
          <td>12 frames</td>
          <td>6 frames</td>
        </tr>
        <tr>
          <td><code>$duration-slowly</code></td>
          <td><code>t(durationSlowly)</code></td>
          <td>400 ms</td>
          <td>24 frames</td>
          <td>12 frames</td>
        </tr>
        <tr>
          <td><code>$duration-paused</code></td>
          <td><code>t(durationPaused)</code></td>
          <td>3200 ms</td>
          <td>192 frames</td>
          <td>96 frames</td>
        </tr>
      </tbody>
    </table>
    <section className="site-mass__section text-longform size--1-of-1">
      <h2 className="text-heading--large">Named Animations</h2>
      <p>
        This is a vocabulary of animations. Click to run individual demos:
      </p>
      <dl className="grid wrap">
        <ToggleExample which="fade" toggle={true} title="fade out, fade in" description="Opacity change" />
        <ToggleExample which="color" toggle={true} title="color" description="Color transition" />
        <ToggleExample which="grow" toggle={true} title="grow" description="Scale increase" />
        <ToggleExample which="shrink" toggle={true} title="shrink" description="Scale decrease" />
        <ToggleExample which="fall" toggle={true} title="fall, rise" description="Scaling, elevation, opacity" />
        <ToggleExample which="lower" toggle={true} title="lower" description="Scale decrease, elevation" />
        <ToggleExample which="raise" toggle={true} title="raise" description="Scale increase, elevation" />
        <ToggleExample which="pop" toggle={false} title="pop" description="Scaling, elevation" />
        <ToggleExample which="punch" toggle={false} title="punch" description="Scaling, elevation" />
        <ToggleExample which="shake" toggle={false} title="shake" description="Horizontal translation" />
        <ToggleExample which="jiggle" toggle={false} title="jiggle" description="Vertical translation" />
        <ToggleExample which="slide" toggle={true} title="slide" description="Translation, opacity" />
        <ToggleExample which="flip" toggle={true} title="flip" description="Y-axis rotate" />
        <ToggleExample which="roll" toggle={true} title="roll" description="X-axis rotate" />
        <ToggleExample which="spin" toggle={true} title="spin" description="Full rotation" />
        <ToggleExample which="tilt" toggle={true} title="tilt" description="Slight X-axis rotation" />
        <ToggleExample which="twist" toggle={true} title="twist" description="Slight rotation" />
      </dl>
    </section>

    </div>
  }
}