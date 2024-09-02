import { Wrapper } from "../wrappers/Objectives";

const Objectives = () => {
  return (
    <Wrapper id="objectives">
      <div className="section-center">
        <div className="objectives">
          <div className="objective">
            <p>Identify sports talents early and nurture them</p>
          </div>
          <div className="objective">
            <p>
              Provide opportunity by engaging in various sports activities.
              {/* to all  */}
              {/* each one of them  */}
            </p>
          </div>
          <div className="objective">
            <p>
              Enhance character through various life skills
              {/* such as
              Sportsmanship, Coordination, Discipline and Procedural Thinking. */}
            </p>
          </div>
          <div className="objective">
            <p>
              Train students and make them participate in national level
              competitions.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Objectives;
