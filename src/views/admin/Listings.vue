<template>
  <div>
    <div class="mb-25 flex-justify-between">
      <h5>Property Listing</h5>

      <el-button
        icon="el-icon-plus"
        type="primary"
        @click="showAddListingModal = true"
      >
        Add New Property
      </el-button>
    </div>
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <p><b>Bathrooms: </b> {{ props.row.bathrooms }}</p>
            <p><b>toilet: </b> {{ props.row.toilet }}</p>
          </template>
        </el-table-column>

        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="price" label="Price"> </el-table-column>
        <el-table-column prop="description" label="Description">
        </el-table-column>
        <el-table-column prop="for_sale" label="For Sale"> </el-table-column>
        <el-table-column prop="rent_limit" label="Rent limit">
        </el-table-column>
        <el-table-column prop="location" label="Location"> </el-table-column>
        <el-table-column prop="property_type" label="Property Type">
        </el-table-column>
      </el-table>
    </el-card>

    <!-- add new enquiry dialog -->
    <el-dialog
      :visible.sync="showAddListingModal"
      width="40%"
      custom-class="mobile-modal"
    >
      <template slot="title">
        <h5>Add Property</h5>
        <p>All fields should be filled for accurate property search.</p>
      </template>
      <AddProperty />
    </el-dialog>
  </div>
</template>

<script>
import AddProperty from '@/components/listings/AddProperty';

export default {
  name: 'Listings',
  components: {
    AddProperty,
  },
  data() {
    return {
      tableData: '',
      showAddListingModal: false,
    };
  },
};
</script>
