<template>
  <div class="dashboard_header flex-justify-between">
    <span>
      <i class="el-icon-s-fold hidden-md-and-up" @click="toggleSideBar"></i>
      {{ pageTitle }}</span
    >

    <div class="right_end">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-badge :value="notify_count" :max="10">
            <el-button type="primary" icon="el-icon-bell" size="mini" />
          </el-badge>
        </span>
        <el-dropdown-menu slot="dropdown" class="header-menu">
          <div class="notification_dropdown">
            <div class="notification_head">
              <h2>Notifications</h2>

              <span v-if="notify_count > 0" @click="clearAllNotifications"
                ><i class="el-icon-delete"></i> Clear all</span
              >
            </div>
            <div class="notification_content">
              <div v-if="notify_count > 0">
                <div
                  class="notifications clickable"
                  v-for="(info, index) in notifications"
                  :key="index"
                >
                  <div class="flex-justify-between">
                    <span>
                      <i class="el-icon-message-solid notify"></i>
                    </span>
                    <div>
                      <span>
                        <b>{{ info.name }}</b> {{ info.message }}
                      </span>
                      <!-- <span class="d-block timestamp">3 minutes ago</span> -->
                    </div>
                    <div @click="closeNotification(index)">
                      <i class="el-icon-circle-close"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="no-notification" v-else>
                <i class="el-icon-bell"></i>
                <p>You have no notifications</p>
              </div>
            </div>
          </div>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-button type="primary" icon="el-icon-user" size="mini" round plain>
            {{ user.first_name + " " + user.last_name }}
          </el-button>
        </span>
        <el-dropdown-menu slot="dropdown">
          <div class="dash-dropdown">
            <ul>
              <li>
                <i class="el-icon-user i-large"></i>
                <span
                  >{{ user.first_name + " " + user.last_name }}
                  <el-tag size="mini">{{ role }}</el-tag></span
                >
              </li>

              <li @click="showEditUserModal = true">
                <i class="el-icon-setting i-large"></i>
                <span>
                  Account Settings
                </span>
              </li>
            </ul>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <!-- Edit user modal -->
    <el-dialog :visible.sync="showEditUserModal" width="30%" custom-class="mobile-modal">
      <div slot="title" style="margin:-10px !important;">
        <span>Account Settings</span>
      </div>
      <AccountSettings :user="user" v-if="showEditUserModal" />
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AccountSettings from "@/components/AccountSettings";

export default {
  name: "Header",
  components: {
    AccountSettings
  },
  data: () => ({
    leftDrawer: false,
    pageTitle: "",
    showEditUserModal: false
  }),
  watch: {
    $route(to) {
      this.pageTitle = to.name;
    }
  },
  created() {
    this.pageTitle = this.$route.name;
    this.$eventbus.$on("assign_property_request", data => {
      this.sortNotificationData(data, "assign");
    });
    this.$eventbus.$on("new_property_enquiry", data => {
      this.sortNotificationData(data, "enquiry");
    });
    this.$eventbus.$on("trip_ended", data => {
      this.sortNotificationData(data, "trip");
    });
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      role: "getRole",
      notifications: "getNotifications",
      notify_count: "getNotifyCount"
    })
  },
  methods: {
    sortNotificationData(data, type) {
      let notifyObj = {};

      if (type == "enquiry") {
        notifyObj.name = "You have a new enquiry ";
        notifyObj.message =
          "for a " + data.propertyInquiry.type + " at " + data.propertyInquiry.location;
      } else if (type == "assign") {
        notifyObj.name =
          data.propertyRequest.user_collaborator.first_name +
          " " +
          data.propertyRequest.user_collaborator.last_name;
        notifyObj.message = " has been assigned a new property request";
      } else if (type == "trip") {
        notifyObj.name = "A trip has been " + data.propertyRequestTripData.status;
        notifyObj.message = " between collaborator and client";
      }

      this.$store.dispatch("add_notification", notifyObj);
    },
    closeNotification(notificationIndex) {
      this.$store.dispatch("close_notification", notificationIndex);
    },
    clearAllNotifications() {
      this.$store.dispatch("remove_all_notification");
    },
    toggleSideBar() {
      var c = document.getElementById("doa-sidebar");
      c.classList.remove("hidden-sm-and-down");
      c.classList.remove("doa-sidebar");
      c.classList.add("new-sidebar");
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard_header {
  line-height: 50px;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 1px 1px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 1px 1px rgb(243, 235, 235); /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 1px 1px rgb(247, 244, 244);

  span {
    font-weight: bold;
    margin-left: 10px;
    font-size: 15px;
  }
  .right_end button {
    margin: 0px 10px;
  }
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}

.notification_dropdown {
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background: whitesmoke;
  overflow-y: scroll;

  .notification_head {
    background: rgb(54, 103, 159);
    background: linear-gradient(
      173deg,
      rgba(54, 103, 159, 1) 2%,
      rgba(30, 86, 171, 0.923406862745098) 26%,
      rgba(11, 35, 111, 0.9430147058823529) 86%
    );
    border-radius: 5px 5px 0 0;
    color: rgb(201, 200, 200);
    padding: 10px;
    text-align: center;
    height: 60px;

    h2 {
      font-size: 16px;
    }

    span {
      color: rgb(247, 54, 54);
      cursor: pointer;
    }
  }

  .notification_content {
    .notifications {
      padding: 10px 5px;
      -webkit-box-shadow: 1px 1px 1px 1px rgb(241, 220, 220); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
      -moz-box-shadow: 1px 1px 1px 1px rgb(241, 227, 227); /* Firefox 3.5 - 3.6 */
      box-shadow: 1px 1px 1px 1px rgb(212, 203, 203);

      img {
        width: 35px;
        border-radius: 30px;
      }

      i.notify {
        color: #303970;
        font-size: 30px;
      }

      .timestamp {
        font-size: 10px;
        font-style: italic;
      }
    }

    .no-notification {
      text-align: center;
      margin: 70px auto;

      i {
        font-size: 30px;
        color: #111747;
      }

      p {
        font-size: 17px;
      }
    }
  }
}
.dash-dropdown {
  width: 190px;
  padding: 10px;

  i {
    font-size: 15px;
    margin-right: 10px;
  }
  li {
    cursor: pointer;
    margin-bottom: 10px;
  }
}
</style>
