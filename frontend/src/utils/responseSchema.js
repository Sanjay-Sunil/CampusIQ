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
          tags: { type: "array", items: { type: "string" } },
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
    },

    // NEW: mess menus (by mess / day)
    messMenus: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },              // e.g. "mess_a_mon"
          mess_name: { type: "string" },       // "Mess A"
          day_of_week: { type: "string" },     // "Monday"
          meal_type: { type: "string" },       // "breakfast" | "lunch" | "dinner"
          items: {
            type: "array",
            items: { type: "string" }          // ["Idli","Sambar","Tea"]
          }
        },
        required: ["id","mess_name","day_of_week","meal_type","items"]
      }
    },

    // NEW: canteens / food outlets
    canteens: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },              // "main_canteen"
          name: { type: "string" },
          location: { type: "string" },
          hours: { type: "string" },
          popular_items: {
            type: "array",
            items: { type: "string" }
          }
        },
        required: ["id","name","location","hours","popular_items"]
      }
    },

    // NEW: companies (that visit campus)
    companies: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },              // "google"
          name: { type: "string" },
          sectors: {
            type: "array",
            items: { type: "string" }          // ["Software","AI"]
          },
          typical_roles: {
            type: "array",
            items: { type: "string" }          // ["SDE","Data Scientist"]
          }
        },
        required: ["id","name","sectors","typical_roles"]
      }
    },

    // NEW: placement statistics
    placementStats: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },              // "2024_overall"
          year: { type: "integer" },           // 2024
          branch: { type: "string" },          // "CSE","CSE AI","ECE"
          total_offers: { type: "integer" },
          average_package_lpa: { type: "number" },
          highest_package_lpa: { type: "number" },
          companies_visited: { type: "integer" }
        },
        required: [
          "id","year","branch",
          "total_offers","average_package_lpa",
          "highest_package_lpa","companies_visited"
        ]
      }
    },

    // NEW: clubs / student bodies
    clubs: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },              // "ml_club"
          name: { type: "string" },
          category: { type: "string" },        // "technical","cultural","sports","other"
          description: { type: "string" },
          contact: { type: "string" },         // email / Telegram / Instagram
          meet_schedule: { type: "string" },   // "Every Friday 7 PM"
          location: { type: "string" }
        },
        required: [
          "id","name","category",
          "description","contact","meet_schedule","location"
        ]
      }
    }
  },

  required: [
    "faq","courses","faculty","departments","services","events",
    "messMenus","canteens","companies","placementStats","clubs"
  ]
};

export default campusSchema;