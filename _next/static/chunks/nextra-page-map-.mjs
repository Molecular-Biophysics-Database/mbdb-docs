import meta from "../../../pages/_meta.js";
import datamodel_meta from "../../../pages/datamodel/_meta.js";
import datamodel_bli_meta from "../../../pages/datamodel/bli/_meta.js";
import datamodel_general_params_meta from "../../../pages/datamodel/general_params/_meta.js";
import datamodel_itc_meta from "../../../pages/datamodel/itc/_meta.js";
import datamodel_mst_meta from "../../../pages/datamodel/mst/_meta.js";
import datamodel_spr_meta from "../../../pages/datamodel/spr/_meta.js";
import issues_meta from "../../../pages/issues/_meta.js";
import record_workflows_meta from "../../../pages/record-workflows/_meta.js";
import rest_api_meta from "../../../pages/rest-api/_meta.js";
import rest_api_records_meta from "../../../pages/rest-api/records/_meta.js";
import technologies_meta from "../../../pages/technologies/_meta.js";
import terms_and_conditions_meta from "../../../pages/terms-and-conditions/_meta.js";
import vocabularies_meta from "../../../pages/vocabularies/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "datamodel",
  route: "/datamodel",
  children: [{
    data: datamodel_meta
  }, {
    name: "bli",
    route: "/datamodel/bli",
    children: [{
      data: datamodel_bli_meta
    }, {
      name: "bli_specific",
      route: "/datamodel/bli/bli_specific",
      frontMatter: {
        "sidebarTitle": "Bli Specific"
      }
    }, {
      name: "data_analysis",
      route: "/datamodel/bli/data_analysis",
      frontMatter: {
        "sidebarTitle": "Data Analysis"
      }
    }, {
      name: "intro",
      route: "/datamodel/bli/intro",
      frontMatter: {
        "sidebarTitle": "Intro"
      }
    }, {
      name: "measurement_protocol",
      route: "/datamodel/bli/measurement_protocol",
      frontMatter: {
        "sidebarTitle": "Measurement Protocol"
      }
    }, {
      name: "measurement",
      route: "/datamodel/bli/measurement",
      frontMatter: {
        "sidebarTitle": "Measurement"
      }
    }, {
      name: "plate",
      route: "/datamodel/bli/plate",
      frontMatter: {
        "sidebarTitle": "Plate"
      }
    }, {
      name: "sensor",
      route: "/datamodel/bli/sensor",
      frontMatter: {
        "sidebarTitle": "Sensor"
      }
    }]
  }, {
    name: "files",
    route: "/datamodel/files",
    frontMatter: {
      "sidebarTitle": "Files"
    }
  }, {
    name: "general_params",
    route: "/datamodel/general_params",
    children: [{
      data: datamodel_general_params_meta
    }, {
      name: "associated_publication",
      route: "/datamodel/general_params/associated_publication",
      frontMatter: {
        "sidebarTitle": "Associated Publication"
      }
    }, {
      name: "chemical_environments",
      route: "/datamodel/general_params/chemical_environments",
      frontMatter: {
        "sidebarTitle": "Chemical Environments"
      }
    }, {
      name: "depositors",
      route: "/datamodel/general_params/depositors",
      frontMatter: {
        "sidebarTitle": "Depositors"
      }
    }, {
      name: "entities_of_interest",
      route: "/datamodel/general_params/entities_of_interest",
      frontMatter: {
        "sidebarTitle": "Entities of Interest"
      }
    }, {
      name: "funding",
      route: "/datamodel/general_params/funding",
      frontMatter: {
        "sidebarTitle": "Funding"
      }
    }, {
      name: "instrument",
      route: "/datamodel/general_params/instrument",
      frontMatter: {
        "sidebarTitle": "Instrument"
      }
    }, {
      name: "intro",
      route: "/datamodel/general_params/intro",
      frontMatter: {
        "sidebarTitle": "Intro"
      }
    }, {
      name: "record_information",
      route: "/datamodel/general_params/record_information",
      frontMatter: {
        "sidebarTitle": "Record Information"
      }
    }, {
      name: "results",
      route: "/datamodel/general_params/results",
      frontMatter: {
        "sidebarTitle": "Results"
      }
    }, {
      name: "schema_version",
      route: "/datamodel/general_params/schema_version",
      frontMatter: {
        "sidebarTitle": "Schema Version"
      }
    }, {
      name: "technique",
      route: "/datamodel/general_params/technique",
      frontMatter: {
        "sidebarTitle": "Technique"
      }
    }]
  }, {
    name: "intro",
    route: "/datamodel/intro",
    frontMatter: {
      "sidebarTitle": "Intro"
    }
  }, {
    name: "itc",
    route: "/datamodel/itc",
    children: [{
      data: datamodel_itc_meta
    }, {
      name: "data_analysis",
      route: "/datamodel/itc/data_analysis",
      frontMatter: {
        "sidebarTitle": "Data Analysis"
      }
    }, {
      name: "injection_mode",
      route: "/datamodel/itc/injection_mode",
      frontMatter: {
        "sidebarTitle": "Injection Mode"
      }
    }, {
      name: "intro",
      route: "/datamodel/itc/intro",
      frontMatter: {
        "sidebarTitle": "Intro"
      }
    }, {
      name: "itc_specific",
      route: "/datamodel/itc/itc_specific",
      frontMatter: {
        "sidebarTitle": "Itc Specific"
      }
    }, {
      name: "measurement",
      route: "/datamodel/itc/measurement",
      frontMatter: {
        "sidebarTitle": "Measurement"
      }
    }]
  }, {
    name: "mst",
    route: "/datamodel/mst",
    children: [{
      data: datamodel_mst_meta
    }, {
      name: "data_analysis",
      route: "/datamodel/mst/data_analysis",
      frontMatter: {
        "sidebarTitle": "Data Analysis"
      }
    }, {
      name: "intro",
      route: "/datamodel/mst/intro",
      frontMatter: {
        "sidebarTitle": "Intro"
      }
    }, {
      name: "measurement",
      route: "/datamodel/mst/measurement",
      frontMatter: {
        "sidebarTitle": "Measurement"
      }
    }, {
      name: "mst_specific",
      route: "/datamodel/mst/mst_specific",
      frontMatter: {
        "sidebarTitle": "Mst Specific"
      }
    }]
  }, {
    name: "reusable_elements",
    route: "/datamodel/reusable_elements",
    children: [{
      name: "biological_origin",
      route: "/datamodel/reusable_elements/biological_origin",
      frontMatter: {
        "sidebarTitle": "Biological Origin"
      }
    }, {
      name: "chemical_constituent",
      route: "/datamodel/reusable_elements/chemical_constituent",
      frontMatter: {
        "sidebarTitle": "Chemical Constituent"
      }
    }, {
      name: "chemical_origin",
      route: "/datamodel/reusable_elements/chemical_origin",
      frontMatter: {
        "sidebarTitle": "Chemical Origin"
      }
    }, {
      name: "chemical",
      route: "/datamodel/reusable_elements/chemical",
      frontMatter: {
        "sidebarTitle": "Chemical"
      }
    }, {
      name: "concentration",
      route: "/datamodel/reusable_elements/concentration",
      frontMatter: {
        "sidebarTitle": "Concentration"
      }
    }, {
      name: "constituent",
      route: "/datamodel/reusable_elements/constituent",
      frontMatter: {
        "sidebarTitle": "Constituent"
      }
    }, {
      name: "data_fitting",
      route: "/datamodel/reusable_elements/data_fitting",
      frontMatter: {
        "sidebarTitle": "Data Fitting"
      }
    }, {
      name: "duration",
      route: "/datamodel/reusable_elements/duration",
      frontMatter: {
        "sidebarTitle": "Duration"
      }
    }, {
      name: "entity_constituent",
      route: "/datamodel/reusable_elements/entity_constituent",
      frontMatter: {
        "sidebarTitle": "Entity Constituent"
      }
    }, {
      name: "environmental_origin",
      route: "/datamodel/reusable_elements/environmental_origin",
      frontMatter: {
        "sidebarTitle": "Environmental Origin"
      }
    }, {
      name: "industrial_origin",
      route: "/datamodel/reusable_elements/industrial_origin",
      frontMatter: {
        "sidebarTitle": "Industrial Origin"
      }
    }, {
      name: "modification",
      route: "/datamodel/reusable_elements/modification",
      frontMatter: {
        "sidebarTitle": "Modification"
      }
    }, {
      name: "molecular_assembly",
      route: "/datamodel/reusable_elements/molecular_assembly",
      frontMatter: {
        "sidebarTitle": "Molecular Assembly"
      }
    }, {
      name: "molecular_weight",
      route: "/datamodel/reusable_elements/molecular_weight",
      frontMatter: {
        "sidebarTitle": "Molecular Weight"
      }
    }, {
      name: "organism",
      route: "/datamodel/reusable_elements/organism",
      frontMatter: {
        "sidebarTitle": "Organism"
      }
    }, {
      name: "person",
      route: "/datamodel/reusable_elements/person",
      frontMatter: {
        "sidebarTitle": "Person"
      }
    }, {
      name: "polymer",
      route: "/datamodel/reusable_elements/polymer",
      frontMatter: {
        "sidebarTitle": "Polymer"
      }
    }, {
      name: "processing_step",
      route: "/datamodel/reusable_elements/processing_step",
      frontMatter: {
        "sidebarTitle": "Processing Step"
      }
    }, {
      name: "quality_controls",
      route: "/datamodel/reusable_elements/quality_controls",
      frontMatter: {
        "sidebarTitle": "Quality Controls"
      }
    }, {
      name: "shaking",
      route: "/datamodel/reusable_elements/shaking",
      frontMatter: {
        "sidebarTitle": "Shaking"
      }
    }, {
      name: "step",
      route: "/datamodel/reusable_elements/step",
      frontMatter: {
        "sidebarTitle": "Step"
      }
    }, {
      name: "storage",
      route: "/datamodel/reusable_elements/storage",
      frontMatter: {
        "sidebarTitle": "Storage"
      }
    }, {
      name: "supplier",
      route: "/datamodel/reusable_elements/supplier",
      frontMatter: {
        "sidebarTitle": "Supplier"
      }
    }, {
      name: "temperature",
      route: "/datamodel/reusable_elements/temperature",
      frontMatter: {
        "sidebarTitle": "Temperature"
      }
    }, {
      name: "value_error",
      route: "/datamodel/reusable_elements/value_error",
      frontMatter: {
        "sidebarTitle": "Value Error"
      }
    }, {
      name: "vocabulary_title",
      route: "/datamodel/reusable_elements/vocabulary_title",
      frontMatter: {
        "sidebarTitle": "Vocabulary Title"
      }
    }, {
      name: "volume",
      route: "/datamodel/reusable_elements/volume",
      frontMatter: {
        "sidebarTitle": "Volume"
      }
    }]
  }, {
    name: "spr",
    route: "/datamodel/spr",
    children: [{
      data: datamodel_spr_meta
    }, {
      name: "intro",
      route: "/datamodel/spr/intro",
      frontMatter: {
        "sidebarTitle": "Intro"
      }
    }, {
      name: "measurement_position",
      route: "/datamodel/spr/measurement_position",
      frontMatter: {
        "sidebarTitle": "Measurement Position"
      }
    }, {
      name: "measurement_protocol",
      route: "/datamodel/spr/measurement_protocol",
      frontMatter: {
        "sidebarTitle": "Measurement Protocol"
      }
    }, {
      name: "measurement",
      route: "/datamodel/spr/measurement",
      frontMatter: {
        "sidebarTitle": "Measurement"
      }
    }, {
      name: "sensor",
      route: "/datamodel/spr/sensor",
      frontMatter: {
        "sidebarTitle": "Sensor"
      }
    }, {
      name: "spr_specific",
      route: "/datamodel/spr/spr_specific",
      frontMatter: {
        "sidebarTitle": "Spr Specific"
      }
    }]
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "issues",
  route: "/issues",
  children: [{
    data: issues_meta
  }, {
    name: "app-issues",
    route: "/issues/app-issues",
    frontMatter: {
      "sidebarTitle": "App Issues"
    }
  }, {
    name: "intro",
    route: "/issues/intro",
    frontMatter: {
      "sidebarTitle": "Intro"
    }
  }]
}, {
  name: "record-workflows",
  route: "/record-workflows",
  children: [{
    data: record_workflows_meta
  }, {
    name: "automatic-extraction",
    route: "/record-workflows/automatic-extraction",
    frontMatter: {
      "sidebarTitle": "Automatic Extraction"
    }
  }, {
    name: "deletion",
    route: "/record-workflows/deletion",
    frontMatter: {
      "sidebarTitle": "Deletion"
    }
  }, {
    name: "intro",
    route: "/record-workflows/intro",
    frontMatter: {
      "sidebarTitle": "Intro"
    }
  }, {
    name: "mbdb-roles",
    route: "/record-workflows/mbdb-roles",
    frontMatter: {
      "sidebarTitle": "Mbdb Roles"
    }
  }, {
    name: "prerequisites",
    route: "/record-workflows/prerequisites",
    frontMatter: {
      "sidebarTitle": "Prerequisites"
    }
  }, {
    name: "publication",
    route: "/record-workflows/publication",
    frontMatter: {
      "sidebarTitle": "Publication"
    }
  }]
}, {
  name: "rest-api",
  route: "/rest-api",
  children: [{
    data: rest_api_meta
  }, {
    name: "authentication",
    route: "/rest-api/authentication",
    frontMatter: {
      "sidebarTitle": "Authentication"
    }
  }, {
    name: "intro",
    route: "/rest-api/intro",
    frontMatter: {
      "sidebarTitle": "Intro"
    }
  }, {
    name: "records",
    route: "/rest-api/records",
    children: [{
      data: rest_api_records_meta
    }, {
      name: "deposition",
      route: "/rest-api/records/deposition",
      frontMatter: {
        "sidebarTitle": "Deposition"
      }
    }, {
      name: "retrieval",
      route: "/rest-api/records/retrieval",
      frontMatter: {
        "sidebarTitle": "Retrieval"
      }
    }, {
      name: "search",
      route: "/rest-api/records/search",
      frontMatter: {
        "sidebarTitle": "Search"
      }
    }]
  }, {
    name: "vocabularies",
    route: "/rest-api/vocabularies",
    frontMatter: {
      "sidebarTitle": "Vocabularies"
    }
  }]
}, {
  name: "technologies",
  route: "/technologies",
  children: [{
    data: technologies_meta
  }, {
    name: "intro",
    route: "/technologies/intro",
    frontMatter: {
      "sidebarTitle": "Intro"
    }
  }]
}, {
  name: "terms-and-conditions",
  route: "/terms-and-conditions",
  children: [{
    data: terms_and_conditions_meta
  }, {
    name: "licensing",
    route: "/terms-and-conditions/licensing",
    frontMatter: {
      "sidebarTitle": "Licensing"
    }
  }, {
    name: "reviewers",
    route: "/terms-and-conditions/reviewers",
    frontMatter: {
      "sidebarTitle": "Reviewers"
    }
  }, {
    name: "users",
    route: "/terms-and-conditions/users",
    frontMatter: {
      "sidebarTitle": "Users"
    }
  }]
}, {
  name: "vocabularies",
  route: "/vocabularies",
  children: [{
    data: vocabularies_meta
  }, {
    name: "affiliations",
    route: "/vocabularies/affiliations",
    frontMatter: {
      "sidebarTitle": "Affiliations"
    }
  }, {
    name: "chemicals",
    route: "/vocabularies/chemicals",
    frontMatter: {
      "sidebarTitle": "Chemicals"
    }
  }, {
    name: "grants",
    route: "/vocabularies/grants",
    frontMatter: {
      "sidebarTitle": "Grants"
    }
  }, {
    name: "instruments",
    route: "/vocabularies/instruments",
    frontMatter: {
      "sidebarTitle": "Instruments"
    }
  }, {
    name: "intro",
    route: "/vocabularies/intro",
    frontMatter: {
      "sidebarTitle": "Intro"
    }
  }, {
    name: "languages",
    route: "/vocabularies/languages",
    frontMatter: {
      "sidebarTitle": "Languages"
    }
  }, {
    name: "organisms",
    route: "/vocabularies/organisms",
    frontMatter: {
      "sidebarTitle": "Organisms"
    }
  }]
}];