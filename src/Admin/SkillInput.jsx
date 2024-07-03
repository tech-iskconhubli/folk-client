import React, { useState } from 'react';
import AdminTopNavbar from '../Components/AdminNavbar/AdminTopNavbar';
import { Box, Input } from '@chakra-ui/react';

const SkillInput = () => {
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setSkills([...skills, inputValue.trim()]);
            setInputValue('');
            e.preventDefault(); // Prevent form submission on Enter key press
        }
    };

    const removeSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    };

    return (
        <>
        <AdminTopNavbar/>
        <Box mt={"60px"}>
            <form onSubmit={(e) => e.preventDefault()} >
                <label htmlFor="skillInput">Enter Skills:</label>
                <Input
                    type="text"
                    id="skillInput"
                    name="skillInput"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </form>
            </Box>
            <div>
                {skills.map((skill, index) => (
                    <span key={index} style={{ marginRight: '8px', display: 'inline-block', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}>
                        {skill}
                        <button onClick={() => removeSkill(index)} style={{ marginLeft: '4px' }}>x</button>
                    </span>
                ))}
            </div>
        </>
    );
};

export default SkillInput;
