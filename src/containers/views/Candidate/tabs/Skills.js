import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import Select from 'react-select';
import { AddSkillToCandidateRequestAsync } from '../../../../api/CandidateSkillsAPI';
import { GetSkillsForCandidateAsync, RemoveSkillFromCandidateAsync } from '../../../../services/CandidateSkillService';
import { GetSkillsAsync } from '../../../../services/SkllService';
import FlashMessageService from '../../../../util/FlashMessageService';

const SkillsTab = ({ candidateId }) => {
  const [selectableSkills, setSelectableSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [candidateSkills, setCandidateSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetch = async () => {

      try {
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
      } catch {
        FlashMessageService.setError("An unexpected error has occurred. Please try again later.");
      } finally {
        setLoading(false);
      }

    };

    fetch();
  }, [candidateId]);

  const addSkill = async () => {
    FlashMessageService.reset();
    if(selectedSkill === null) return;

    const hasSkill = candidateSkills.some(x => x.id === selectedSkill.value);

    if(!hasSkill) {
      setCandidateSkills([...candidateSkills, {name: selectedSkill.label, id: selectedSkill.value}]);

      setSaving(true);
      await AddSkillToCandidateRequestAsync(candidateId, selectedSkill.value);
      setSaving(false);
    }
  
    setSelectedSkill(null);

    FlashMessageService.setSuccess("Successfully added skill");
  }

  const removeSkill = async (id) => {
    FlashMessageService.reset();

    setCandidateSkills(
      candidateSkills.filter(x => x.id !== id)
    );

    setSaving(true);

    await RemoveSkillFromCandidateAsync(candidateId, id);
    
    setSaving(false);

    FlashMessageService.setSuccess("Successfully removed skill");
  };

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
          {candidateSkills.map((x, i) => {
            return (
              <tr key={i}>
                <td>{x.name}</td>
                <td>
                  <Button size="sm" variant="danger" onClick={() => removeSkill(x.id)}>Remove</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

    </div>
  )
};

export default SkillsTab;