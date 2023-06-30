import { Box, Step, StepDescription, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Text, useSteps } from '@chakra-ui/react';
import React from 'react'

type StepType = {
    title: string;
    description: string;
    icon: string;
}

const steps: StepType[] = [
    {
        title: "S'enregistrer",
        description: "Creez un compte ou connectez-vous pour acceder aux compagnes et y participer",
        icon: 'login'
    }, {
        title: "Choisir",
        description: "Dans la liste des campagnes actives, choisissez celle(s) qui vous interesse(nt) le plus",
        icon: 'choose'
    }, {
        title: "Remplir",
        description: "Remplissez les formulaires et signez les documents necessaires...",
        icon: 'complete'
    }, {
        title: "Patienter",
        description: "Patientez la validation de votre investissement et les gains a recevoir",
        icon: 'wait'
    }
]

function HowStepper() {

    const {activeStep, setActiveStep} = useSteps({
        index: 1,
        count: steps.length
    });

  return (
    <Stepper index={activeStep} orientation='vertical' gap={8} size="lg" colorScheme='green' my={16} mx='auto' p={8} w='lg' >
        {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
                <StepIndicator>
                    <StepStatus
                        complete={<StepNumber />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                    />
                </StepIndicator>

                <Box>
                    <StepTitle><Text>{step.title}</Text></StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                </Box>
                
                <StepSeparator />
            </Step>
        ))}
    </Stepper>
  )
}

export default HowStepper;