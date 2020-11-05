/**
 * map() is a method creates a new array with the results get
 * of execute a callback function on every element.
 */

const applicants = [
  {
    id: 1,
    name: 'Chris Sanz',
    location: {
      city: 'Lima',
      country: 'Perú',
    },
    skills: {
      frontend: 'Angular',
      backend: 'Java'
    }
  },
  {
    id: 2,
    name: 'Dany Gop',
    location: {
      city: 'Rio de Janeiro',
      country: 'Brazil',
    },
    skills: {
      frontend: 'React,Svelte',
      backend: 'NodeJs'
    }
  },
  {
    id: 3,
    name: 'Red Feut',
    location: {
      city: 'Quito',
      country: 'Ecuador',
    },
    skills: {
      frontend: 'Vue',
      backend: 'PHP,Nodejs'
    }
  }
]

/**
 * Simplify list of applicants considering only id, name, country of origin, and skills in generals.
 * @param {Array} applicants List of applicants.
 * @returns {Array} New List of applicants with only information required.
 */
function getDataApplicants(applicants) {
  return applicants.map(({ id, name, location: { country }, skills: { frontend, backend } }) => ({ id, name, country, skills: frontend.concat(',',backend) }));
}

console.log(getDataApplicants(applicants))