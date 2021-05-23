import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import { GetSkillsForCandidateRequestAsync } from '../../../../api/CandidateSkillsAPI';
import { GetSkillsAsync } from '../../../../services/SkllService';

const SkillsTab = ({ candidateId }) => {
  const [selectableSkills, setSelectableSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [candidateSkills, setCandidateSkills] = useState([]);

  useEffect(() => {
    const fetch = async () => {

      const [skillsData, candidateSkillsData] = await Promise.all(
        [GetSkillsAsync(), GetSkillsForCandidateRequestAsync(candidateId)]
      );

      console.log(candidateSkillsData);

      setSelectableSkills(
        skillsData.map((x) => ({
          value: x.id,
          label: x.name
        }))
      )
    };

    fetch();
  }, []);

  const addSkill = () => {
    setSelectedSkill(null);
  }

  return (
    <div className="mt-5">
      <Row>
        <Col xs={6}>
          <Select 
            options={selectableSkills} 
            onChange={setSelectedSkill}
            placeholder="Select skill"
            value={selectedSkill}
          />
        </Col>

        <Col xs={6}>
          <Button onClick={addSkill}>Add</Button>
        </Col>
      </Row>

    </div>
  )
};

export default SkillsTab;