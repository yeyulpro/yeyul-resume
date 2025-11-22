import React from "react";
import { Box, Paper, Typography, Link, Grid, Chip } from "@mui/material";
import { projects } from "./Project";
import { skills } from "./Skills";
import CircleIcon from "@mui/icons-material/Circle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function App() {
  return (
    <Box sx={{ maxWidth: 1200, margin: "auto", p: 3 }}>
      {/* Header */}
      <Box
        component={Paper}
        sx={{
          p: 3,
          mb: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={6}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ color: "#1B3C53" }}>
          YEYUL CHOI
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ color: '#234C6A', fontWeight: 'bold' }}>
          Full-Stack Software Engineer Intern
        </Typography>
        <Box mt={1} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon />
            <Typography variant="subtitle2" color="initial" sx={{ color: '#234C6A', fontWeight: 'bold' }}>
              Toronto, ON
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon />
            <Link
              href="mailto:yeyulchoi2@gmail.com"
              sx={{ textDecoration: "none" }}
            >
              <Typography variant="body1" color="initial" sx={{ color: '#234C6A', fontWeight: 'bold' }}>
                yeyulchoi2@gmail.com
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneAndroidIcon />
            <Link href="tel:1-647-995-1483" sx={{ textDecoration: "none" }}>
              <Typography variant="body1" color="initial" sx={{ color: '#234C6A', fontWeight: 'bold' }}>
                1-647-995-1483
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LinkedInIcon />
            <Link
              href="https://www.linkedin.com/in/yeyul-choi"
              sx={{ textDecoration: "none", color: '#234C6A', fontWeight: 'bold' }}
            >
              Linkedin
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <GitHubIcon />
            <Link
              href="https://github.com/yeyulpro"
              sx={{ textDecoration: "none", color: '#234C6A', fontWeight: 'bold' }}
            >
              GitHub
            </Link>
          </Box>
        </Box>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }} elevation={1}>
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#1B3C53' }}>
          OBJECTIVE
        </Typography>
        <Typography variant="body1">
          Aspiring Full-Stack Software Engineer Intern with hands-on development experience in <strong>C#</strong>,
          <strong> ASP.NET Core Web API</strong>, <strong>React.js</strong>,
          <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>,
          <strong>Python</strong>, and <strong>Django</strong>. Experienced in building and deploying scalable
          applications on <strong>Azure</strong> and <strong>AWS</strong>
          (<strong>AWS Certified Solutions Architect – Associate</strong>), continuously learning new technologies,
          and delivering maintainable software solutions.
        </Typography>


      </Paper>

      <Paper sx={{ p: 2, mb: 3 }} elevation={1}>
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#1B3C53" }}>
          SKILLS
        </Typography>
        <Grid container spacing={1}>
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Chip label={skill} color="primary" />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: 2, mb: 3 }} elevation={1}>
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#234C6A', fontWeight: 'bold' }}>
          CERTIFICATIONS
        </Typography>
        <Typography variant="body1">
          AWS Certified Solutions Architect – Associate (July 2023 – July 2026)
        </Typography>
      </Paper>

      <Paper sx={{ p: 2, mb: 3 }} elevation={1}>
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#234C6A', fontWeight: 'bold' }}>
          PROJECTS
        </Typography>

        {projects.map((item, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" fontWeight="bold">
              {item.name} | <Link href={item.url}>{item.url}</Link>
            </Typography>
            <Typography variant="h6">{item.description}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CircleIcon sx={{ fontSize: "0.5rem" }} />
              <Typography sx={{ fontWeight: 'bolder' }}>Backend</Typography>
              <Typography variant="body2" color="initial">
                {item.backend}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CircleIcon sx={{ fontSize: "0.5rem" }} />
              <Typography sx={{ fontWeight: 'bolder' }}>Frontend</Typography>
              <Typography variant="body2" color="initial">
                {item.frontend}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CircleIcon sx={{ fontSize: "0.5rem" }} />
              <Typography sx={{ fontWeight: 'bolder' }}>Integrations</Typography>
              <Typography variant="body2" color="initial">
                {item.integrations}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CircleIcon sx={{ fontSize: "0.5rem" }} />
              <Typography sx={{ fontWeight: 'bolder' }}>Deployment</Typography>
              <Typography variant="body2" color="initial">
                {item.deployment}
              </Typography>
            </Box>
            {item.improvement && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CircleIcon sx={{ fontSize: "0.5rem" }} />
                <Typography sx={{ fontWeight: 'bolder' }}>Improvement</Typography>
                <Typography variant="body2" color="initial">
                  {item.improvement}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Paper>

      <Paper sx={{ p: 2, mb: 3 }} elevation={1}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          EDUCATION
        </Typography>
        <Typography variant="body1">
          Centennial College | Scarborough, ON (Jan 2022 – Dec 2023) – Diploma
          in Software Engineering Technology
        </Typography>
      </Paper>
    </Box>
  );
}
