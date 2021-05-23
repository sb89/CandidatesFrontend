import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import Select from 'react-select';
import { AddSkillToCandidateRequestAsync } from '../../../../api/CandidateSkillsAPI';
import { GetSkillsForCandidateAsync } from '../../../../services/CandidateSkillService';
import { GetSkillsAsync } from '../../../../services/SkllService';

const SkillsTab = ({ candidateId }) => {
  const [selectableSkills, setSelectableSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [candidateSkills, setCandidateSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetch = async () => {

      const [skillsData, candidateSkillsData] = await Promise.all(
        [GetSkillsAsync(), GetSkillsForCandidateAsync(candidateId)]
      );

      setCandidateSkills(candidateSkillsData);

      setSelectableSkills(
        skillsData.map((x) => ({
          value: x.id,
          label: x.name
        }))
      )

      setLoading(false);
    };

    fetch();
  }, []);

  const addSkill = async () => {
    if(selectedSkill === null) return;

    const hasSkill = candidateSkills.some(x => x.id === selectedSkill.value);

    if(!hasSkill) {
      setCandidateSkills([...candidateSkills, {name: selectedSkill.label, id: selectedSkill.value}]);

      setSaving(true);
      await AddSkillToCandidateRequestAsync(candidateId, selectedSkill.value);
      setSaving(false);
    }
  
    setSelectedSkill(null);
  }

  if (loading) {
    return (
      <Container className="main-container">
        <div className="d-flex justify-content-center ">
          <Spinner animation="border" variant="primary" />
        </div>
      </Container>

    );
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
          <Button onClick={addSkill} variant="primary" type="submit" disabled={saving}>
            {saving
              ? <React.Fragment><Spinner animation="border" size="sm" /> Saving...</React.Fragment>
              : <React.Fragment>Add</React.Fragment>
            }
          </Button>
        </Col>
      </Row>

      <Table className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidateSkills.map((x) => {
            return (
              <tr>
                <td>{x.name}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </div>
  )
};

export default SkillsTab;