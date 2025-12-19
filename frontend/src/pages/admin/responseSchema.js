const campusSchema = {
  type: "object",
  properties: {
    faq: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          topic: {
            type: "string",
            enum: ["library","hostel","exam","fees","transport","mess","other"]
          },
          question: { type: "string" },
          answer: { type: "string" },
          tags: {
            type: "array",
            items: { type: "string" }
          },
          related_entities: {
            type: "array",
            items: {
              type: "object",
              properties: {
                type: { type: "string" },
                id: { type: "string" }
              },
              required: ["type","id"]
            }
          }
        },
        required: ["id","topic","question","answer","tags","related_entities"]
      }
    },
    courses: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "string" },
          name: { type: "string" },
          department: { type: "string" },
          semester: { type: "integer" },
          credits: { type: "integer" },
          slots: { type: "string" },
          faculty_id: { type: "string" }
        },
        required: ["code","name","department","semester","credits","slots","faculty_id"]
      }
    },
    faculty: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          email: { type: "string" },
          department: { type: "string" },
          office_location: { type: "string" },
          consultation_hours: { type: "string" }
        },
        required: ["id","name","email","department","office_location","consultation_hours"]
      }
    },
    departments: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          building_location: { type: "string" },
          contact_email: { type: "string" }
        },
        required: ["id","name","building_location","contact_email"]
      }
    },
    services: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          type: {
            type: "string",
            enum: ["library","hostel","canteen","admin","medical","sports","other"]
          },
          location: { type: "string" },
          hours: { type: "string" },
          contact: { type: "string" }
        },
        required: ["id","name","type","location","hours","contact"]
      }
    },
    events: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          type: {
            type: "string",
            enum: ["fest","workshop","talk","competition","other"]
          },
          description: { type: "string" },
          start_date: { type: "string" },
          end_date: { type: "string" },
          location: { type: "string" }
        },
        required: ["id","name","type","description","start_date","end_date","location"]
      }
    }
  },
  required: ["faq","courses","faculty","departments","services","events"]
};

export default campusSchema;